import { Page, Locator } from "@playwright/test";

export default class MedicalRecordsPage {
  readonly page: Page;
  public medicalRecord: {
    medicalRecordsLink: Locator;
    mrOutpatientList: Locator;
    okButton: Locator;
    fromDate: Locator;
    searchBar: Locator;
    doctorFilter: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.medicalRecord = {
      medicalRecordsLink: page.locator(''),
      mrOutpatientList: page.locator(''),
      okButton: page.locator(''),
      searchBar: page.locator(""),
      fromDate: page.locator(``),
      doctorFilter: page.locator(''),
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

  /**
   * @Test5
   * @description This method verifies the presence of the doctor filter functionality in the medical records module.
   * It applies the filter by selecting a specific doctor and a date range, and validates that the search results
   * correctly display records associated with the selected doctor.
   */
  async presenceOfDoctorFilter() {
    // write your logic here
  }
}
