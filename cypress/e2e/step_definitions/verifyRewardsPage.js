import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage").default;
const RewardsPage = require("../../pages/RewardsPage").default;

Given("A User has successfully Logged into rewards page", function () {
  cy.Login2();
});
When("They select Cake and Coffee for one and click", function () {
  homePage.displayedRewards.cakeAndHotDrinkForOne().click({ fore: true });
});
Then("Cake and Coffee for one page is displayed", function () {
  cy.url().should("eq", RewardsPage.rewards.cakeAndCoffeeForOne);//"https://www.ikea.com/pt/en/loyalty-hub/rewards/4989/"); // => true
});
When("They select Cake and Coffee for two and click", function () {
  homePage.displayedRewards.cakeAndHotDrinkForTwo().click({ force: true });
});
Then("Cake and Coffee for two page is displayed", function () {
  cy.url().should("eq", RewardsPage.rewards.cakeAndCoffeeForTwo)
});
When("They select Complete meal for one and click", function () {
  homePage.displayedRewards.completeMealForOne().click({ force: true });
});
Then("Complete meal for one page is displayed", function () {
  cy.url().should("eq", RewardsPage.rewards.completeMealForOne)
});
When("They select Complete meal for two  and click", function () {
  homePage.displayedRewards.completeMealForTwo().click({ force: true });
});
Then("Complete meal for two page is displayed", function () {
  cy.url().should("eq",RewardsPage.rewards.completeMealForTwo)
});
When("They select voucher for sidewalk  and click", function () {
    homePage.displayedRewards.voucherForDeliveryOrCollect().click({ force: true });
  });
  Then("voucher for sidewalk page is displayed", function () {
    cy.url().should("eq", "https://www.ikea.com/pt/en/loyalty-hub/rewards/4903/");
  });
  When("They select voucher for home delivery and click", function () {
    homePage.displayedRewards.voucherForHomeDelivery39().click({ force: true });
  });
  Then("voucher for home delivery page is displayed", function () {
    cy.url().should("eq", RewardsPage.rewards.voucherForHomeDelivery)//"https://www.ikea.com/pt/en/loyalty-hub/rewards/4900/");
  });
  When("They select voucher for sidewalk delivery and click", function () {
    homePage.displayedRewards.voucherForSidewalkDelivery().click({ force: true });
  });
  Then("voucher for sidewalk delivery page is displayed", function () {
    cy.url().should("eq", RewardsPage.rewards.voucherForSideWalkDelivery)
  });
  When("They select Ikea product voucher10 and click", function () {
    homePage.displayedRewards.ikeaProductVoucher10().click({ force: true });
  });
  Then("Ikea product voucher10 page is displayed", function () {
    cy.url().should("eq", RewardsPage.rewards.ikeaProductVoucher10)
  });
  When("They select Ikea product voucher15 and click", function () {
    homePage.displayedRewards.ikeaProductVoucher15().click({ force: true });
  });
  Then("Ikea product voucher15 page is displayed", function () {
    cy.url().should("eq", RewardsPage.rewards.ikeaProductVoucher15)
  });
  When("They select Voucher for click and collect at pickup point and click", function () {
    homePage.displayedRewards.voucherForClickAndCollect().click({ force: true });
  });
  Then("Voucher for click and collect at pickup point page is displayed", function () {
    cy.url().should("eq", RewardsPage.rewards.voucherForClickCollectPickup)
  });