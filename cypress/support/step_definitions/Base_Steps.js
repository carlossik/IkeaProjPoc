/// <reference types="cypress"/>

import {When,Then,Before,After} from "@badeball/cypress-cucumber-preprocessor"

Before(() => {
    cy.log('executing the tests')
}
)
