/// <reference types="cypress"/>

import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
//const {Given} = require("@badeball/cypress-cucumber-preprocessor");
import homePage from '../pageobjects/home_page';
import signInPage from '../pageobjects/signIn_page';

///Given(/^I am on the ([^"]*) page$/, (page) =>

Given(/^I am on the ([^"]*) page$/, (page) => {
    return "pending";
  });
  Then("my reward keys should be displayed", function(){
    return "pending";
  });
  Then("the number of rewards displayed are 12", function (){
    return "pending"
  });
  Then("total Keys are displayed", function (){
    return "pending"
  });
  Then("History button is displayed", function (){
    return "pending"
  });

  