class CustomerAdminPage{

elements = {
    retailUnitDropdown:() => cy.get('.retailUnitDropdown'),
    retailUnitPT:()=> retailUnitDropdown.select('pt'),
    retailUnitIT:() => retailUnitDropdown.select('it'),
    CustomerSearchBar:() => cy.get('.searchCustomer'),
    SearchWithLoginId:() => CustomerSearchBar.select('loginId'),
    SearchWithEmail:() => CustomerSearchBar.select('contactEmail'),
    SearchWithCardNumber:() => CustomerSearchBar.select('cardNumber'),
    SearchWithTransactionalID:() => CustomerSearchBar.select('transactionalId'),
    SearchWithPhoneNumnber:() => CustomerSearchBar.select('contactPhone')

}



}