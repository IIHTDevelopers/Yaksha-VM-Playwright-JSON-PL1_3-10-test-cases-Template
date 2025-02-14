import { Locator, Page } from "@playwright/test";

export class SubStorePage {
  readonly page: Page;
    public substore: {
        substoreLink: Locator;
        selectSubstore: Locator;
        inventoryRequisition: Locator;
        inventory: Locator;
    }

    constructor(page: Page) {
        this.page = page;
        this.substore = {
            substoreLink: page.locator(''),
            selectSubstore: page.locator(''),
            inventoryRequisition: page.locator(''),
            inventory: page.locator(``),
        }
    }

  /**
     * @Test6
     * @description This method navigates to the Inventory Requisition section, captures a screenshot of the page, 
     *              and saves it in the screenshots folder.
     * @expected
     * Screenshot of the page is captured and saved successfully.
     */
  async captureInventoryRequisitionScreenshot() {
    // Write your logic here
  }
}
