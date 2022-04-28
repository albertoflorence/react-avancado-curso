/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add/remove to wishlist', () => {
    cy.visit('/wishlist')
    cy.login()

    cy.findByText('Your wishlist is empty').should('exist')
    cy.getByDataCy('You may like these games').within(() => {
      cy.addToWishlist(0)
      cy.wait(500)
      cy.addToWishlist(1)
    })

    cy.getByDataCy('my-wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 2)
      cy.removeFromWishlist(1)
      cy.wait(500)
      cy.removeFromWishlist(0)
    })

    cy.findByText('Your wishlist is empty').should('exist')
  })
})
