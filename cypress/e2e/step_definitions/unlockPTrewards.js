/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const homePage = require('../../pages/HomePage').default;
const RewardsPage = require('../../pages/RewardsPage').default;
const logUser = require('../loginScript').default;

Given('A User has successfully Logged into the rewards page', function (string) {
  return 'pending';
});
When('Cake and Coffee for one is selected', function (string) {
  return 'pending';
});
Then('Cake and Coffee amount displayed is {string} ', function () {
  //return "pending"
});
