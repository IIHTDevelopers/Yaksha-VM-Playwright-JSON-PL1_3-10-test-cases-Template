import { expect, test, Page } from "playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import RadiologyPage from "../../pages/RadiologyPage";
import MedicalRecordsPage from "src/pages/MedicalRecordsPage";
import { SubStorePage } from "src/pages/SubStorePage";
import { DoctorsPage } from "src/pages/DoctorsPage";
import PharmacyPage from "src/pages/PharmacyPage";
import MaternityPage from "src/pages/MaternityPage";

test.describe("Yaksha", () => {
  let loginPage: LoginPage;
  let radiologyPage: RadiologyPage;
  let medicalRecordsPage: MedicalRecordsPage;
  let subStorePage: SubStorePage;
  let doctorsPage: DoctorsPage;
  let pharmacyPage: PharmacyPage;
  let maternityPage: MaternityPage;

  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL as string);

    // Initialize page objects
    loginPage = new LoginPage(page);
    radiologyPage = new RadiologyPage(page);
    medicalRecordsPage = new MedicalRecordsPage(page);
    subStorePage = new SubStorePage(page);
    doctorsPage = new DoctorsPage(page);
    pharmacyPage = new PharmacyPage(page);
    maternityPage = new MaternityPage(page);

    // Login before each test
    await loginPage.performLogin();
    // Verify login was successful
    await verifyUserIsLoggedin(page);
  });

  // Individual test cases

  test("TS-1 Handle Alert on Pharmacy Module", async ({ page }) => {
    await pharmacyPage.handlingAlertOnRadiology();
    await verifyUserIsOnCorrectURL(page, "/Pharmacy/Order/GoodsReceiptList");
  });

  test("TS-2 Verify to get the validation message when Click on print receipt without filling any details", async ({
    page,
  }) => {
    await pharmacyPage.verifyPrintReceipt();
    await verifyUserIsOnCorrectURL(page, "/Pharmacy/Order/GoodsReceiptList");
  });

  test("TS-3 Verify to data range by select Last 3 months option from drop down", async ({
    page,
  }) => {
    await radiologyPage.verifyDataWithinLastThreeMonths();
    await verifyUserIsOnCorrectURL(page, "/Radiology/ImagingRequisitionList");
  });

  test("TS-4 Verify that entering a keyword matching existing records", async ({
    page,
  }) => {
    await medicalRecordsPage.keywordMatching();
    await verifyUserIsOnCorrectURL(page, "/Medical-records/OutpatientList");
  });

  test("TS-5 Login with invalid credentials", async ({ page }) => {
    await loginPage.performLoginWithInvalidCredentials();
    await verifyUserIsNotLoggedin(page);
  });

  test("TS-6 Capture screenshot of Inventory Requisition section", async ({ page }) => {
    await subStorePage.captureInventoryRequisitionScreenshot();
    await verifyUserIsOnCorrectURL(page, "Inventory/InventoryRequisitionList");
  });

  test("TS-7 Verify logout functionality from Admin dropdown", async ({
    page,
  }) => {
    await loginPage.verifyLogoutFunctionality();
    await verifyUserisLoggedOut(page);
  });

  test("TS-8 Verify Maternity Allowance Report is visible ", async ({
    page,
  }) => {
    await maternityPage.verifyMaternityAllowanceReport();
    await verifyUserIsOnCorrectURL(
      page,
      "/Maternity/Reports/MaternityAllowance"
    );
  });

  test("TS-9 verify Imaging and lab order add successfully", async ({
    page,
  }) => {
    await doctorsPage.performInpatientImagingOrder();
    await verifyActiveOrderIsPresent(page);
  });

  test("TS-10 Verify to filter the records by select X-RAY from Filter drop down ", async ({
    page,
  }) => {
    await radiologyPage.filterListRequestsByDateAndType();
    await verifyUserIsOnCorrectURL(page, "/Radiology/ImagingRequisitionList");
  });
});

/**
 * ------------------------------------------------------Helper Methods----------------------------------------------------
 */

async function verifyUserIsLoggedin(page: Page) {
  // Verify successful login by checking if 'admin' element is visible
  await page
    .locator('//li[@class="dropdown dropdown-user"]')
    .waitFor({ state: "visible", timeout: 20000 });
  expect(
    await page.locator('//li[@class="dropdown dropdown-user"]').isVisible()
  );
}

async function verifyActiveOrderIsPresent(page: Page) {
  // Verify active order is present by checking if 'Active Order' element is visible
  expect(await page.locator('//span[text()=" Active Orders"]').isVisible()).toBeTruthy();
}

async function verifyUserIsOnCorrectURL(page: Page, expectedURL: string) {
  const getActualURl = page.url();
  expect(getActualURl).toContain(expectedURL);
}

async function verifyUserIsNotLoggedin(page: Page) {
  expect(
    await page
      .locator('//div[contains(text(),"Invalid credentials !")]')
      .isVisible()
  ).toBeTruthy();
}

async function verifyUserisLoggedOut(page: Page) {
  expect(await page.locator(`#login`).isVisible()).toBeTruthy();
}
