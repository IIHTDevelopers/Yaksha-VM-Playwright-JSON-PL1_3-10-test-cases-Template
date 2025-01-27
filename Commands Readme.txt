Commands:
* Please change the path to Playwright folder using:
	cd Playwright

* Install all dependencies in the Playwright folder path using:
	npm install

* Install playwright in the Playwright folder path:
	npx playwright install 

* Run the Tests in the Playwright folder path:
npx playwright test ./src/tests/PL1_testcases/yaksha.spec.ts


* Once you have executed the test cases. Now it is necessary to push your code to git. For this, please go inside the folder created on desktop with the email id you have used to login and then open git bash and execute below commands:

   - To add all files: git add .

   - To commit changes: git commit -m "<Your commit message>"

   - To push changes: git push





import { expect, Locator, Page } from "@playwright/test";
import { CommonMethods } from "../tests/commonMethods";
import testData from "../Data/login.json";

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
    this.usernameInput = page.locator(`#username_id`);
    this.passwordInput = page.locator(`#password`);
    this.loginButton = page.locator(`#login`);
    this.loginErrorMessage = page.locator(
      `//div[contains(text(),"Invalid credentials !")]`
    );
    this.admin = page.locator('//li[@class="dropdown dropdown-user"]');
    this.logOut = page.locator("//a[text() = ' Log Out ']");
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
    try {
      const loginData = testData.ValidLogin;
      const validUserName = loginData.ValidUserName;
      const validPassword = loginData.ValidPassword;

      // Highlight and fill the username field
      await CommonMethods.highlightElement(this.usernameInput);
      await this.usernameInput.fill(validUserName);

      // Highlight and fill the password field
      await CommonMethods.highlightElement(this.passwordInput);
      await this.passwordInput.fill(validPassword);

      // Highlight and click the login button
      await CommonMethods.highlightElement(this.loginButton);
      await this.loginButton.click();

      // Verify successful login by checking if 'admin' element is visible
      await this.admin.waitFor({ state: "visible", timeout: 20000 });
      expect(await this.admin.isVisible()).toBeTruthy();
    } catch (e) {
      console.error("Error during login:", e);
    }
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
