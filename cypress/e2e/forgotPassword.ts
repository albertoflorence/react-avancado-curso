/// <reference path="../support/index.d.ts" />

describe('Forgot Password', () => {
  it('should send email on success', () => {
    cy.intercept({ url: '**/auth/forgot-password', method: 'POST' }, res => {
      res.reply({ statusCode: 200, body: { ok: true } })
      expect(res.body.email).to.eq('any@mail.com')
    })

    cy.visit('/forgot-password')

    cy.findByPlaceholderText(/email/i).type('any@mail.com')
    cy.findByRole('button', { name: /send email/i }).click()
    cy.findByText('You just received an email!')
  })

  it('should show error on invalid email', () => {
    cy.intercept({ url: '**/auth/forgot-password', method: 'POST' }, res => {
      res.reply({
        statusCode: 400,
        body: {
          error: 'Bad Request',
          message: [{ messages: [{ message: 'This email does not exist' }] }]
        }
      })
    })

    cy.visit('/forgot-password')

    cy.findByPlaceholderText(/email/i).type('invalid@mail.com')
    cy.findByRole('button', { name: /send email/i }).click()
    cy.findByText('This email does not exist')
  })
})
