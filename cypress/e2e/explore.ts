/// <reference path="../support/index.d.ts" />

describe('Explore Page', () => {
  it('should render more games', () => {
    cy.visit('/games')
    cy.getByDataCy('game-card').should('have.length', 12)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('game-card').should('have.length.gt', 12)
  })

  it('should sort by price', () => {
    cy.findAllByText(/lowest to highest/i)
      .first()
      .click()

    cy.location('href').should('contain', 'sort=price%3Aasc')

    cy.getFirstGameCard(() => cy.findByText('$0.00').should('exist'))

    cy.findAllByText(/highest to lowest/i)
      .first()
      .click()

    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.getFirstGameCard(() => cy.priceGreaterThan(0))
  })

  it('should filter by price', () => {
    cy.findAllByText(/highest to lowest/i)
      .first()
      .click()

    cy.findAllByText('FREE').first().click()
    cy.location('href').should('contain', 'price_lte=0')
    cy.getFirstGameCard(() => cy.findByText('$0.00').should('exist'))

    cy.findAllByText('Under $150').first().click()
    cy.location('href').should('contain', 'price_lte=150')
    cy.getFirstGameCard(() => cy.priceLessThan(150))
  })

  it('should filter by platform and genre', () => {
    cy.findAllByText(/windows/i)
      .first()
      .click()

    cy.location('href').should('contain', 'platforms=windows')

    cy.findAllByText(/sports/i)
      .first()
      .click()

    cy.location('href').should('contain', 'categories=sports')
  })

  it('should render empty when no games is found', () => {
    cy.visit('/games')

    cy.findAllByText(/sports/i)
      .first()
      .click()

    cy.findAllByText(/free/i).first().click()

    cy.findByText(`We couldn't find anything matching your criteria`)
  })
})
