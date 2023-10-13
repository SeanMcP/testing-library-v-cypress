import React from "react";
import App from "./App";

describe("<App />", () => {
  it("renders Fizz", () => {
    cy.mount(<App />);
    const button = cy.get('[data-testid="button"]');
    for (let i = 0; i < 3; i++) {
      button.realClick();
    }
    cy.get('[data-testid="message"]').should("have.text", "Fizz");
  });

  it("renders Buzz", () => {
    cy.mount(<App />);
    const button = cy.get('[data-testid="button"]');
    for (let i = 0; i < 5; i++) {
      button.realClick();
    }
    cy.get('[data-testid="message"]').should("have.text", "Buzz");
  });

  it("renders Bang", () => {
    cy.mount(<App />);
    const button = cy.get('[data-testid="button"]');
    for (let i = 0; i < 7; i++) {
      button.realClick();
    }
    cy.get('[data-testid="message"]').should("have.text", "Bang");
  });

  it("renders FizzBuzz", () => {
    cy.mount(<App />);
    const button = cy.get('[data-testid="button"]');
    for (let i = 0; i < 15; i++) {
      button.realClick();
    }
    cy.get('[data-testid="message"]').should("have.text", "FizzBuzz");
  });

  it("renders FizzBang", () => {
    cy.mount(<App />);
    const button = cy.get('[data-testid="button"]');
    for (let i = 0; i < 21; i++) {
      button.realClick();
    }
    cy.get('[data-testid="message"]').should("have.text", "FizzBang");
  });

  it('renders BuzzBang', () => {
    cy.mount(<App />)
    const button = cy.get('[data-testid="button"]')
    for (let i = 0; i < 35; i++) {
      button.realClick()
    }
    cy.get('[data-testid="message"]').should('have.text', 'BuzzBang')
  })

  it('renders FizzBuzzBang', () => {
    cy.mount(<App />)
    const button = cy.get('[data-testid="button"]')
    for (let i = 0; i < 105; i++) {
      button.realClick()
    }
    cy.get('[data-testid="message"]').should('have.text', 'FizzBuzzBang')
  })
});
