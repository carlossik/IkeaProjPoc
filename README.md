# Cypress Cucumber Test Example

[![Cypress](https://img.shields.io/npm/v/cypress?color=33ff99&label=cypress&logo=cypress&style=for-the-badge)](https://www.cypress.io)
![Cucumber](https://img.shields.io/npm/v/@cucumber/cucumber?color=%231dbb68&label=cucumber&logo=cucumber&style=for-the-badge)
![Cucumber Preprocessor](https://img.shields.io/npm/v/@badeball/cypress-cucumber-preprocessor?label=Cucumber%20preprocessor&style=for-the-badge)

This is a simple project that demonstrates end-to-end testing in [cypress.io](https://www.cypress.io/)
using [cucumber preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor).

## Prerequisites

Make sure you have installed all the following prerequisites on your development machine:

| OS      | Node                                       |
|---------|--------------------------------------------|
| Windows | `winget install OpenJS.NodeJS.LTS`         |
| macOS   | `brew install node@16`                     |

## Executing The Tests

You will need to create a file cypress.env.json and have the required
login details to enable the tests to run

- Run the test.
run the test using cypress runner
 npx cypress open

```shell
npm install && npm run test
```
