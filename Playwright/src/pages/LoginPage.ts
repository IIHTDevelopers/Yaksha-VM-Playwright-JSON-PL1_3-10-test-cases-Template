import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  private usernameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private loginErrorMessage: Locator;
  private admin: Locator;
  private logOut: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator(``);
    this.passwordInput = page.locator(``);
    this.loginButton = page.locator(``);
    this.loginErrorMessage = page.locator(``);
    this.admin = page.locator('');
    this.logOut = page.locator("");
  }

  /**
   * @Test0 This method logs in the user with valid credentials.
   *
   * @description This method performs the login operation using the provided valid credentials. It highlights the input
   *              fields for better visibility during interaction and fills the username and password fields. After submitting
   *              the login form by clicking the login button, it validates the success of the login process. The login is
   *              considered successful if there are no errors.
   */
  async performLogin() {
    // write your logic here
  }

  /**
   * @Test5 This method attempts login with invalid credentials and retrieves the resulting error message.
   *
   * @description Tries logging in with incorrect credentials to verify the login error message display.
   *              Highlights each input field and the login button during interaction. Captures and returns
   *              the error message displayed upon failed login attempt.
   */
  async performLoginWithInvalidCredentials() {
    // write your logic here
  }

  /**
   * @Test7
   * @description This method verifies the logout functionality from the Admin dropdown.
   * @expected
   * User is logged out successfully and the login page is displayed.
   */
  async verifyLogoutFunctionality() {
    // write your logic here
  }
}
