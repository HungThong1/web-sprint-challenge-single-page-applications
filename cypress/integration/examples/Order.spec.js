describe("Inputs and submit button", () => {
    it("can navigate to home page", () => {
      cy.visit("http://localhost:3000");
      cy.url().should("include", "http://localhost:3000");
    }); 
    it("can navigate to order page", () => {
      cy.visit("http://localhost:3000/pizza");
      cy.url().should("include", "http://localhost:3000/pizza");
    });
    it("can type a name for a new order", () => {
      cy.get("input[name=name]")
        .type("Hung Thong")
        .should("have.value", "Hung Thong");
    });
    it("pepperoni button should select", () => {
      cy.get("input[name=pepperoni]").click().should("have.value", "on");
    });
  
    it("pineapple button should select", () => {
      cy.get("input[name=pineapple]").click().should("have.value", "on");
    });
  
    it("can add a new order", () => {
      cy.get("button").click();
    });
  });