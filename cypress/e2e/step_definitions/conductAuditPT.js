import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


//const logUser = require("../loginScript").default;

Given("I am logged into acount", function () {
    cy.loginIT()
    
    });
When("I run cypress audit",function(){
cy.lighthouse();
});
Then("Accessibility tests pass",function(){
//return "pending"
});
