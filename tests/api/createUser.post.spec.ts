import { test, expect } from '@playwright/test';
import { Validator } from 'jsonschema';
import schema from '@schemas/singleUser/post'
import env from '@environment';
import createUserPayloads from '@payloads/createUserPayloads'

const validator = new Validator();

test.describe("Single User POST requests", () => {
    test('POST /endpoint create a userId with status code 201 and a correct response body', async ({ request }) => {

        const endpoint = `/api/users`;
        const response = await request.post(endpoint, {
            data: createUserPayloads.validPayload
        });

        // Verify the status code
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(201);

        const responseBody = await response.json()
        const { name, job } = createUserPayloads.validPayload

        // Verify response body
        expect(responseBody.id).toBeTruthy()
        expect(responseBody.name).toBe(name)
        expect(responseBody.job).toBe(job)

        const result = validator.validate(responseBody, schema);

        if (!result.valid) {
            console.error('Validation schema errors:', result.errors);
        }

        expect(result.valid).toBe(true);
    })

    test('POST /endpoint create a userId with status code 201 with a random parameter', async ({ request }) => {

        const user = env.singleUser

        const endpoint = `/api/users`;
        const response = await request.post(endpoint, {
            data: createUserPayloads.randomPayload
        });

        // Verify the status code
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(201);

        const responseBody = await response.json()
        const { name, job, xpto } = createUserPayloads.randomPayload

        // Verify response body
        expect(responseBody.id).toBeTruthy()
        expect(responseBody.name).toBe(name)
        expect(responseBody.job).toBe(job)
        expect(responseBody.xpto).toBe(xpto)

        const result = validator.validate(responseBody, schema);

        if (!result.valid) {
            console.error('Validation schema errors:', result.errors);
        }

        expect(result.valid).toBe(true);
    })
})