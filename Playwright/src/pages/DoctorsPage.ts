import { Locator, Page } from "@playwright/test";

export class DoctorsPage {
  readonly page: Page;
  private doctorsLink: Locator;
  private inpatientDepartmentTab: Locator;
  private searchBar: Locator;
  private orderDropdown: Locator;
  private imagingActionButton: Locator;
  private searchOrderItem: Locator;
  private proceedButton: Locator;
  private signButton: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.doctorsLink = page.locator('');
    this.inpatientDepartmentTab = page.locator('');
    this.searchBar = page.locator("");
    this.orderDropdown = page.locator("");
    this.imagingActionButton = page.locator('');
    this.searchOrderItem = page.locator('');
    this.proceedButton = page.locator('');
    this.signButton = page.locator('');
    this.successMessage = page.locator('');
  }

  /**
   * @Test9
   * @description This method verifies the process of placing an imaging order for an inpatient.
   * It navigates to the Inpatient Department, searches for a specific patient, selects an imaging action,
   * chooses an order type, specifies the order item, and completes the process by signing the order.
   * The method confirms the successful placement of the order by verifying the success message.
   */
  async performInpatientImagingOrder() {
    // write your logic here
  }
}
