/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate'

describe('User', () => {
  it('should sign up', () => {
    cy.visit('/signup')
    const { email, password, username } = createUser()

    cy.findByPlaceholderText(/username/i).type(username)
    cy.findByPlaceholderText(/email/i).type(email)
    cy.findByPlaceholderText(/^password/i).type(password)
    cy.findByPlaceholderText(/confirm password/i).type(password)
    cy.findByRole('button', { name: /sign up now/i }).click()

    cy.url().should('eq', Cypress.config().baseUrl + '/')
    cy.findByText(username).should('exist')
  })

  it('should login and sign out', () => {
    cy.visit('/login')

    cy.login()

    cy.url().should('eq', Cypress.config().baseUrl + '/')

    cy.findByText('testt').click()
    cy.findByRole('link', { name: /sign out/i }).click()
    cy.findByText('testt').should('not.exist')
  })

  it.only('should redirect to the callback url after login', () => {
    cy.visit('/profile/me')

    cy.url().should('eq', Cypress.config().baseUrl + '/login?callbackUrl=/profile/me')
    cy.login()
    cy.findByLabelText(/username/i).should('have.value', 'testt')
    cy.findByLabelText(/e-mail/i).should('have.value', 'test@test.com')
    cy.url().should('eq', Cypress.config().baseUrl + '/profile/me')
  })
})
