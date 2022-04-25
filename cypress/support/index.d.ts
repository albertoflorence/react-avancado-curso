/// <reference types="cypress" />

interface ShowcaseAttributes {
  name: string
  highlight?: boolean
}

declare namespace Cypress {
  interface Chainable {
    shouldRenderBanner: () => Chainable<Element>
    shouldRenderShowcase: (attrs: ShowcaseAttributes) => Chainable<Element>
    getByDataCy: (selector: string) => Chainable<Element>
  }
}
