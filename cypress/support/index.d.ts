/// <reference types="cypress" />

interface ShowcaseAttributes {
  name: string
  highlight?: boolean
}

interface LoginParams {
  email: string
  password: string
}

declare namespace Cypress {
  interface Chainable {
    shouldRenderBanner: () => Chainable<Element>
    shouldRenderShowcase: (attrs: ShowcaseAttributes) => Chainable<Element>
    getByDataCy: (selector: string) => Chainable<Element>
    priceGreaterThan: (value: number) => Chainable<Element>
    priceLessThan: (value: number) => Chainable<Element>
    getFirstGameCard: (cb: Function) => Chainable<Element>
    login: (credentials?: LoginParams) => Chainable<Element>
    addToShoppingCart: (cartNumber?: number) => Chainable<Element>
    removeFromShoppingCart: (cartNumber?: number) => Chainable<Element>
  }
}
