describe("User Login", () => {
  it("Login valid credential", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/signin");

    cy.get("#email")
      .should("be.visible")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("#password")
      .should("be.visible")
      .type("12345")
      .should("have.value", "12345");

    cy.contains("button", "Login").click();

    cy.get("nav").should("exist");

    cy.get("header").should("exist");
  });

  it("Login invalid credential", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#email").type("hello@example.com");

    cy.get("#password").type("123");

    cy.contains("button", "Login").click();

    cy.contains("Email atau Password salah").should("be.visible");
  });
});
