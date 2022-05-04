/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('Checkout', () => {
  describe('Free Games', () => {
    const user = createUser()
    it('should buy free games', () => {
      cy.visit('/')

      cy.getByDataCy('Free Games').within(() => {
        cy.addToShoppingCart(0)
        cy.addToShoppingCart(1)
      })

      cy.buyGamesOnCart(user)

      cy.findByText(/you can get for free !/i).should('exist')
      cy.findByRole('button', { name: /buy now/i }).click()

      cy.url({ timeout: 15000 }).should('eq', Cypress.config().baseUrl + '/success')
      cy.findByRole('heading', { name: /your purchase was successful!/i })
    })

    it('should show bought games in orders', () => {
      cy.visit('/profile/orders')
      cy.login(user)
      cy.getByDataCy('game-item').should('have.length', 2)
    })
  })

  describe('Paid Games', () => {
    const user = createUser()
    it('should buy paid games', () => {
      cy.visit('/')

      cy.getByDataCy('Most Popular Games').within(() => {
        cy.addToShoppingCart(0)
        cy.addToShoppingCart(1)
      })

      cy.buyGamesOnCart(user)

      cy.findByRole('button', { name: /buy now/i }).should('have.attr', 'disabled')

      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1025')
      cy.fillElementsInput('cardCvc', '123')

      cy.findByRole('button', { name: /buy now/i }).click()

      cy.url({ timeout: 15000 }).should('eq', Cypress.config().baseUrl + '/success')
      cy.findByRole('heading', { name: /your purchase was successful!/i })
    })

    it('should show paid bought games in orders', () => {
      cy.visit('/profile/orders')
      cy.login(user)
      cy.getByDataCy('game-item').should('have.length', 2)
    })
  })
})
