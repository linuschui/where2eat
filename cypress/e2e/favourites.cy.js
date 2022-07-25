describe('whr2eat app', () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  })

/*   it("sign in with existing account", () => {
    cy.get('span').click()
    cy.get('button').contains("Sign In")
    cy.get('[type="text"]').type('belbel@gmail.com')
    cy.get('[type="password"]').type('123456')
    cy.get('button').click()
    cy.get('.hero-container').should("exist")
  }) */

  it("can open a favourites pages", () => {
    cy.get('[href="/favourites2"] > .btn').click()
    cy.get('h2').contains("FAVOURITES")
  })

  it("can add a restaurant", () => {
    cy.get('[href="/favourites2"] > .btn').click()
    cy.get('input').type("Starbucks")
    cy.get('form > .btn > .fa-solid').click()
    cy.get('#todo-list').should('have.length', 1)
  })

  it("can delete a restaurant", () => {
    cy.get('[href="/favourites2"] > .btn').click()
    cy.get('input').type("Starbucks")
    cy.get('form > .btn > .fa-solid').click()
    cy.get('#todo-list').should('have.length', 1).contains("Starbucks")
    cy.get('form > input').type("Koi")
    cy.get('form > .btn > .fa-solid').click()
    cy.get('#todo-list').should('have.length', 2)
    cy.get(':nth-child(4) > .todo-actions > :nth-child(2)').click()
    cy.get('#todo-list').should('have.length', 1)
  })

});
