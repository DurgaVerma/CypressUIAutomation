import LoginPage from "../pageObjects/LoginPage";

describe("HB Login Test", () => {
  it("should login successfully and then visit the URL", () => {
    // Ensure that fixture data is loaded before using it
    if (
      !Cypress.env("HB_LOGIN_EMAIL_Id") ||
      !Cypress.env("HB_LOGIN_PASSWORD")
    ) {
      throw new Error("Failed to load env data");
    }

    // Visit the URL with authentication
    cy.launchHB(); // This will use your custom command to visit the URL with authentication

    const loginPage = new LoginPage();

    const hbLoginUserName = Cypress.env("HB_LOGIN_EMAIL_Id");
    const hbLoginPassword = Cypress.env("HB_LOGIN_PASSWORD");

    // Fill in login form and submit
    loginPage.getEmailBox().type(hbLoginUserName);
    loginPage.getPasswordBox().type(hbLoginPassword);
    loginPage.getLoginButton().click();

    // Wait for the URL to change after successful login
    cy.url().should("include", "dashboard"); // Verify that the URL contains "dashboard"
  });
});
