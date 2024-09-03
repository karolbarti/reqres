import { test, expect } from '@playwright/test';
import { Validator } from 'jsonschema';
import schema from '@schemas/singleUser/getOne'
import env from '@environment';

const validator = new Validator();

test.describe("Single User GET requests", () => {
    test('GET /endpoint must list a single user with status code 200 and a correct response body', async ({ request }) => {

        const user = env.singleUser

        const endpoint = `/api/users/${user.id}`;
        const response = await request.get(endpoint);

        // Verify the status code
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const responseBody = await response.json()
        const { data } = responseBody

        // Verify response body
        expect(data.id).toBe(user.id)
        expect(data.first_name).toBe(user.firstName)
        expect(data.last_name).toBe(user.lastName)
        expect(data.email).toBe(user.email)

        const result = validator.validate(responseBody, schema);

        if (!result.valid) {
            console.error('Validation schema errors:', result.errors);
        }

        expect(result.valid).toBe(true);
    })

    test('GET /endpoint with a invalid userId and return status code 404', async ({ request }) => {

        const endpoints = [
            '/api/users/non-existent-endpoint',
            '/api/users/true',
            '/api/users/@#$%*'
        ];

        const requestList = endpoints.map(endpoint => request.get(endpoint))
        const responseList = await Promise.all(requestList)

        responseList.forEach(response => {
            // Verify the status code
            expect(response.status()).toBe(404)
        })
    })
})