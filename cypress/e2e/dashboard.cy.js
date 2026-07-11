describe("E2E - Akses Halaman Dashboard (Overview)", () => {
  beforeEach(() => {
    // Mock response API login, supaya test tidak bergantung pada backend/akun asli
    cy.intercept("POST", "https://jwt-auth-eight-neon.vercel.app/login", {
      statusCode: 200,
      body: {
        token: "dummy-token",
      },
    }).as("loginRequest");

    // Mock response API bills, supaya tidak ada request gagal (401) ke backend asli
    cy.intercept("GET", "https://jwt-auth-eight-neon.vercel.app/bills", {
      statusCode: 200,
      body: { data: [] },
    }).as("getBills");

    // Mock response API expenses, supaya tidak ada request gagal (401) ke backend asli
    cy.intercept("GET", "https://jwt-auth-eight-neon.vercel.app/expenses", {
      statusCode: 200,
      body: { data: [] },
    }).as("getExpenses");
  });

  it("User berhasil login dan mengakses halaman Dashboard (Overview)", () => {
    // 1. Buka halaman Sign In
    cy.visit("/signin");

    // 2. Isi form login
    cy.get("#email").type("hello@example.com");
    cy.get("#password").type("password123");

    // 3. Submit form
    cy.contains("button", "Login").click();

    // 4. Tunggu request login selesai
    cy.wait("@loginRequest");

    // 5. Verifikasi berhasil diarahkan ke halaman Overview ("/")
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);

    // 6. Verifikasi elemen-elemen utama Dashboard tampil
    cy.contains("Total Balance").should("be.visible");
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transactions").should("be.visible");
    cy.contains("Statistics").should("be.visible");

    // 7. Verifikasi menu "Overview" di sidebar berstatus aktif
    cy.contains("Overview").should("have.class", "font-bold");
  });
});
