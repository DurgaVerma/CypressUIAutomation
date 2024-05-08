//This class will contain function related to login page
class LoginPage {
  getEmailBox() {
    return cy.get('input[name="email"]');
  }

  getPasswordBox() {
    return cy.get('input[name="password"]');
  }

  getLoginButton() {
    return cy.get('button[type="submit"]');
  }
}
export default LoginPage; //this will make sure this class is avilable every where in project
