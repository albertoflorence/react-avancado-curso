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

      cy.findAllByLabelText('Icon Badge').first().click()
      cy.findByRole('link', { name: /buy it now/i }).click()
      cy.findByRole('link', { name: /sign up/i }).click()
      cy.signUp(user)

      cy.findAllByLabelText('Icon Badge').first().click()
      cy.findByRole('link', { name: /buy it now/i }).click()

      cy.findByText(/you can get for free !/i).should('exist')
      cy.findByRole('button', { name: /buy now/i }).click()

      cy.findByRole('heading', { name: /your purchase was successful!/i })
      cy.url().should('equal', Cypress.config().baseUrl + '/success')
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

      cy.findAllByLabelText('Icon Badge').first().click()
      cy.findByRole('link', { name: /buy it now/i }).click()
      cy.findByRole('link', { name: /sign up/i }).click()
      cy.signUp(user)

      cy.findAllByLabelText('Icon Badge').first().click()
      cy.findByRole('link', { name: /buy it now/i }).click()

      cy.findByRole('button', { name: /buy now/i }).should('have.attr', 'disabled')

      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1025')
      cy.fillElementsInput('cardCvc', '123')

      cy.findByRole('button', { name: /buy now/i }).click()

      cy.findByRole('heading', { name: /your purchase was successful!/i })
      cy.url().should('equal', Cypress.config().baseUrl + '/success')
    })

    it('should show paid bought games in orders', () => {
      cy.visit('/profile/orders')
      cy.login(user)
      cy.getByDataCy('game-item').should('have.length', 2)
    })
  })
})
