describe('whr2eat app', () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  })

  it("should be sign up by default", () => {
    cy.get('button').contains("Sign Up")
  })

  it("should not be able to sign up with existing account", () => {
    cy.get('button').contains("Sign Up")
    cy.get('.loginContainer > :nth-child(1)')
    cy.get('[type="text"]').type('belbel@gmail.com')
    cy.get('[type="password"]').type('123456')
    cy.get('button').click()
    cy.get('.loginContainer > :nth-child(3)').should("exist").contains("already in use")
  })

  it("password should be longer than 6 characters", () => {
    cy.get('.loginContainer > :nth-child(1)')
    cy.get('[type="text"]').type('abc@gmail.com')
    cy.get('[type="password"]').type('1234')
    cy.get('button').click()
    cy.get('.loginContainer > :nth-child(6)').should("exist").contains("at least 6")
  })

  it("should go to sign in page after clicking", () => {
    cy.get('span').click()
    cy.get('button').contains("Sign In")
  })

  it("should not be able to sign up with non existing account", () => {
    cy.get('span').click()
    cy.get('button').contains("Sign In")
    cy.get('.loginContainer > :nth-child(1)')
    cy.get('[type="text"]').type('beel@gmail.com')
    cy.get('[type="password"]').type('123456')
    cy.get('button').click()
    cy.get('.loginContainer > :nth-child(3)').contains("no user record corresponding")
  })

  it("should not be able to sign in to existing account with wrong password", () => {
    cy.get('span').click()
    cy.get('button').contains("Sign In")
    cy.get('.loginContainer > :nth-child(1)')
    cy.get('[type="text"]').type('belbel@gmail.com')
    cy.get('[type="password"]').type('123455')
    cy.get('button').click()
    cy.get('.loginContainer > :nth-child(6)').contains("password is invalid")
  })

  it("should be able to sign in with existing account", () => {
    cy.get('span').click()
    cy.get('button').contains("Sign In")
    cy.get('.loginContainer > :nth-child(1)')
    cy.get('[type="text"]').type('belbel@gmail.com')
    cy.get('[type="password"]').type('123456')
    cy.get('button').click()
    cy.get('.hero-container').should("exist")
  })

  it("can open the trending page", () => {
    cy.get('li.btn-mobile > .btn').click
    cy.get('.cards > h1').contains("trending")
  })

  it("can open the favourites page", () => {
    cy.get('[href="/favourites2"] > .btn').click()
    cy.get('h2').contains("FAVOURITES")
  })

  it("can open the maps page", () => {
    cy.get(':nth-child(2) > .nav-links').click()
    cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').should("exist")
  })

  it("can open the locations page", () => {
    cy.get(':nth-child(3) > .nav-links').click()
    cy.get('.cards').contains("Kent Ridge North")
    cy.get('.cards').contains("Kent Ridge South")
    cy.get('.cards').contains("Bukit Timah")
  })

  it("can open the KRNorth page", () => {
    cy.get('[href="/KRNorth"] > .btn').click()
    cy.get('h1').contains("Kent Ridge North")
  })

  it("can open the KRSouth page", () => {
    cy.get('[href="/KRSouth"] > .btn').click()
    cy.get('h1').contains("Kent Ridge South")
  })

  it("can open the Bukit Timah page", () => {
    cy.get('[href="/law"] > .btn').click()
    cy.get('.cards > :nth-child(1)').contains("LAW")
  })

  it("can open the all restaurants page from home page", () => {
    cy.get('[href="/restaurants"] > .btn').click()
    cy.get('.Restaurants')
    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains("NAME")
  })

  it("can open the all restaurants page from search icon in navbar", () => {
    cy.get(':nth-child(4) > .nav-links').click()
    cy.get('.Restaurants')
    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains("NAME")
  })

  it("can go back to home page via navbar home icon", () => {
    cy.get(':nth-child(4) > .nav-links').click()
    cy.get('.Restaurants')
    cy.get(':nth-child(1) > .nav-links').click()
    cy.get('.hero-container').should("exist")
  })

  it("can go back to home page via navbar whr2eat icon", () => {
    cy.get(':nth-child(4) > .nav-links').click()
    cy.get('.Restaurants')
    cy.get('.navbar-logo').click()
    cy.get('.hero-container').should("exist")
  })

  it("can log out", () => {
    cy.get('.navbar-container > .btn-mobile > .btn').click()
    cy.get('.loginContainer > :nth-child(1)').contains("Username")
    cy.get('.loginContainer > :nth-child(4)').contains("Password")
  })

});
