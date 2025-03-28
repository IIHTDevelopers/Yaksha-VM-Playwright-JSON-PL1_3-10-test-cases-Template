import { Page, Locator } from "@playwright/test";

export default class MedicalRecordsPage {
  readonly page: Page;
  public medicalRecord: {
    medicalRecordsLink: Locator;
    mrOutpatientList: Locator;
    okButton: Locator;
    fromDate: Locator;
    searchBar: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.medicalRecord = {
      medicalRecordsLink: page.locator(''),
      mrOutpatientList: page.locator(''),
      okButton: page.locator(''),
      searchBar: page.locator(""),
      fromDate: page.locator(``),
    };
  }

  /**
   * @Test4
   * @description This method verifies patient records in the Dispensary module by applying a date filter
   * and searching for a specific patient by gender. It validates the search results by checking if the
   * gender appears in the filtered records.
   */
  async keywordMatching() {
    // write your logic here
  }
}
