/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const homePage = require('../../pages/HomePage').default;
const logUser = require('../loginScript').default;

Given('A user is already Logged in', function () {
  logUser.login();
  homePage.clickAcceptCookie();
});

Then('They can see how to collect rewards', function () {
  return 'pending';
});
Given('User slides the slider button', function () {
  return 'pending';
});
Then('availabe rewards  is displayed', function () {
  return 'pending';
});
