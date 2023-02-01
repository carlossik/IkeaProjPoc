/* eslint-disable no-unused-vars */
class CustomerAdminPage{

elements = {
    retailUnitDropdown:() => cy.get('.retailUnitDropdown'),
    retailUnitPT:()=>cy.get('.retailUnitDropdown').select('pt'),
    retailUnitIT:() => cy.get('.retailUnitDropdown').select('it'),
    CustomerSearchBar:() => cy.get('.searchCustomer'),
    SearchWithLoginId:() => cy.get('.retailUnitDropdown').select('loginId'),
    SearchWithEmail:() => cy.get('.retailUnitDropdown').select('contactEmail'),
    SearchWithCardNumber:() => cy.get('.retailUnitDropdown').select('cardNumber'),
    SearchWithTransactionalID:() => cy.get('.retailUnitDropdown').select('transactionalId'),
    SearchWithPhoneNumnber:() => cy.get('.retailUnitDropdown').select('contactPhone')

}



}