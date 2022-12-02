import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const adminPage = require("../../pages/CustomerAdminPage").default;
const logUser = require("../loginScript").default;


Given("A Customer admin is logged into their account", function () {
    cy.visit('https://private.prod.customeradmin.customer.ingka.com/')
    
    });
Then("Welcome Message is displayed",function(){
////return "pending"
});
Then("country selection drop down box is Displayed",function(){
//return "pending"
});
Then("Then Search Bar is displayed",function(){
    return "pending"
});
Then("Search Bar contains customer Free search Options",function(){
    //return "pending"
})
