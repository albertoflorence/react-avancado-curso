/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should show invalid params error', () => {
    cy.intercept({ url: '**/auth/reset-password', method: 'POST' }, res => {
      res.reply({
        statusCode: 400,
        body: {
          error: 'Bad Request',
          message: [{ messages: [{ message: 'Incorrect code provided.' }] }]
        }
      })
    })

    cy.visit('/reset-password?code=wrong_code')

    cy.findByPlaceholderText('Password').type('Senha12345')
    cy.findByPlaceholderText('Confirm password').type('Senha12345')
    cy.findByRole('button', { name: /send email/i }).click()
    cy.findByText('Incorrect code provided.').should('exist')
  })

  it('should redirect to login on success', () => {
    cy.intercept({ url: '**/auth/reset-password', method: 'POST' }, res => {
      res.reply({
        statusCode: 200,
        body: { ok: true }
      })
    })

    cy.visit('/reset-password?code=valid_code')

    cy.findByPlaceholderText('Password').type('Senha12345')
    cy.findByPlaceholderText('Confirm password').type('Senha12345')
    cy.findByRole('button', { name: /send email/i }).click()
    cy.url().should('eq', Cypress.config().baseUrl + '/login')
  })
})
