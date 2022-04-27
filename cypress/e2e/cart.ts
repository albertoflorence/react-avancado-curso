/// <reference path="../support/index.d.ts" />

describe('Cart', () => {
  it('should add item to cart', () => {
    cy.visit('/')

    cy.addToShoppingCart(0)
    cy.addToShoppingCart(1)
    cy.findAllByLabelText('Icon Badge').first().should('have.text', 2)

    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click()

    cy.getByDataCy('cart-list').within(() => {
      cy.findAllByRole('heading').should('have.length', 2)
    })

    cy.removeFromShoppingCart(0)
    cy.findAllByLabelText('Icon Badge').first().should('have.text', 1)
    cy.removeFromShoppingCart(1)
    cy.findByLabelText('Icon Badge').should('not.exist')

    cy.findAllByLabelText(/shopping cart/i)
      .first()
      .click()

    cy.findByText('Your cart is empty').should('exist')
  })
})
