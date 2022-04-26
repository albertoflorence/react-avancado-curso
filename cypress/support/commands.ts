// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'

Cypress.Commands.add('shouldRenderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: /dishonored: complete collection/i })
    cy.findByRole('link', { name: /buy now/i })

    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: /batman: arkham/i })
    cy.findByRole('link', { name: /buy now/i })

    cy.get('.slick-dots > :nth-child(3) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: /cyberpunk 2077/i })
    cy.findByRole('link', { name: /buy now/i })
  })
})

Cypress.Commands.add('shouldRenderShowcase', ({ name, highlight = false }) => {
  cy.getByDataCy(name).within(() => {
    cy.findByRole('heading', { name }).should('exist')
    cy.getByDataCy('highlight').should(highlight ? 'exist' : 'not.exist')

    if (highlight) {
      cy.getByDataCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href')
      })
    }

    cy.get('.slick-slide').should('have.length.gt', 0)
  })
})

Cypress.Commands.add('getByDataCy', selector => {
  cy.get(`[data-cy="${selector}"]`)
})

Cypress.Commands.add('priceGreaterThan', value => {
  cy.findByText(/^\$\d+.\d{1,2}/)
    .invoke('text')
    .then(el => el.replace('$', ''))
    .then(parseFloat)
    .should('be.gt', value)
})

Cypress.Commands.add('priceLessThan', value => {
  cy.findByText(/^\$\d+.\d{1,2}/)
    .invoke('text')
    .then(el => el.replace('$', ''))
    .then(parseFloat)
    .should('be.lt', value)
})

Cypress.Commands.add('getFirstGameCard', cb => {
  cy.wait(10)
    .getByDataCy('game-card')
    .first()
    .within(() => {
      cb()
    })
})
