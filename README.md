# Reqres Automation Project

## Overview

The Reqres Automation Project is a test automation suite for testing the Reqres API using Playwright and TypeScript. This project aims to ensure the correctness and reliability of the Reqres API endpoints.

## Technologies Used

- **Playwright**: A powerful framework for browser automation, allowing you to write end-to-end tests for web applications.
- **TypeScript**: A superset of JavaScript that adds static typing to improve code quality and maintainability.

## First Step

Create a .env file like the example ".env.example" for your environment test suite.

## Running Tests

To execute the tests in this project, use the following commands:

### Run All Tests

`npx playwright test`

This command runs all the test files located in the `tests` directory. It will execute both POST and GET method tests, as well as any other test cases you have defined.

### Run POST Method Tests

`npx playwright test tests/api/createUser.post.spec.ts`

This command specifically runs the test cases defined in the `createUser.post.spec.ts` file. It focuses on testing POST method endpoints.

### Run GET Method Tests

`npx playwright test tests/api/singleUser.get.spec.ts`

This command specifically runs the test cases defined in the `singleUser.get.spec.ts` file. It focuses on testing GET method endpoints.

## Reports

To visualize test results and trends, you can generate and view Allure reports using the following commands:

### Generate Allure Report

`allure generate allure-results --clean -o allure-report`

Generates an Allure report from the test results stored in the `allure-results` directory. The `--clean` flag ensures that any previous reports are removed before generating a new one. The generated report will be saved in the `allure-report` directory.

### Serve Allure Report

`allure serve allure-results`

Starts a web server to serve the Allure report. This command will automatically open the report in your default web browser, allowing you to view and interact with the test results in a user-friendly format.

### Report Allure Example



## Summary

- **Playwright**: Used for automating and running end-to-end tests.
- **TypeScript**: Enhances the development experience with static typing.
- **`npx playwright test`**: Runs all tests.
- **`npx playwright test tests/api/createUser.post.spec.ts`**: Runs only POST method tests.
- **`npx playwright test tests/api/singleUser.get.spec.ts`**: Runs only GET method tests.
- **`allure generate allure-results --clean -o allure-report`**: Generates the Allure report.
- **`allure serve allure-results`**: Serves the Allure report in a browser.

