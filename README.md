# hmpps-probation-in-court-e2e-tests-service

This repository contains automated E2E API-UI tests for the hmpps-probation-in-court-e2e-tests-service. The tests are written in TypeScript and use the Playwright testing library.

playwright official website: https://playwright.dev/docs/intro

## Getting Started:

### Prerequisites:

    Node.js
    npm
    playwright with ts - npm init playwright@latest

### Installation:

    git clone - Clone the repository
                Navigate to the project directory
    cd  hmpps-probation-in-court-e2e-tests-service

### Install the dependencies:

    npm ci

### Project Folder Structure:
    hmpps-probation-in-court-e2e-tests-service
    > e2e_tests/ – actual test specs. 
    > fixtures - Contains setup hooks and shared context (e.g. login states, mock servers) used across tests.
    > pages - Implements the Page Object Model, encapsulating UI selectors and actions for maintainable test abstraction.
    > test-data - Stores test data inputs, payloads, and reusable datasets for parameterized scenarios.
    > utils - Hosts helper functions, custom assertions, and reusable logic to keep tests clean and DRY.
    > config/ – environment configs, secrets references  

### Running the Tests:

  All the below scripts are in package.json

  To run the tests, use the following command:
  This test repo supports multiple browsers for running the tests - in case if you would like to run in 'firefox' or 'webkit' please replcae 'chrome' in the below commands and uncomment firefox and webkit in playwright.config.ts. But recommanded to run in 'chrome'.
  
  npm run build                     - To build the project(tsconfig.json) - This will compile your .ts files
                                      into the dist folder as specified in your tsconfig.json.

  npm run test:smoke:chrome         - Run a Specific Test Case by Tag Name in headless mode - this is to run the smoke test.

  npm run test:chrome               - Runs tests only in Chromium headless and Cleans old reports
                                      Generates fresh Allure results

  npm run test:chrome:headed        - Runs tests only in Chromium headed mode and Cleans old reports
                                      Generates fresh Allure results

                                                 
  npm run test --headed             - To run the tests on all browsers in headed mode

  npm run report                    - To view the HTML report

  npm run allure:serve              - To view the allure report

  npm run codegen                   - It launches a browser window and starts recording your actions—clicks,
                                      typing, navigation, etc.—and generates the equivalent Playwright test code in real time.

  npm run lint                      - Before committing to catch issues.

  npm run lint:fix                  - During development to tidy up your codebase - Automatically corrects
                                      fixable issues (e.g., spacing, semicolons, unused imports).  

  npx playwright 
  test tests/eg.spec.ts             - Run a Specific Test File, Replace tests/eg.spec.ts with the path to
                                      your actual test file.

  npm run test:ui                   - UI Mode lets you explore, run, and debug tests with a time 
                                      travel experience complete with a watch mode.

  npm run test:debug                - This command opens a browser window as well as the Playwright Inspector. 
                                      You can use the step over button at the top of the inspector to step through your test.                           

### allure-results:

This project captures allure report after the execution.(To view: npm run allure:serve)

### tags:

Used tags (regression, smoke, e2e, and JIRA ticket reference) -  to organize, filter, and selectively run tests by feature, priority, or environment for scalable automation.