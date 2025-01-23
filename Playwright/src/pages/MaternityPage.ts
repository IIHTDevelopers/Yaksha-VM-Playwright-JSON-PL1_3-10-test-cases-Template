import { Page, Locator } from "@playwright/test";

export default class MaternityPage {

  readonly page: Page;
  public maternityLink: Locator;
  public maternity: {
    reportLink: Locator;
    maternityAllowanceReport: Locator;
    dateFrom: Locator;
    showReportBtn: Locator;
    tableRowLocator: Locator;
    createdOn: Locator;
    dataType: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.maternityLink = page.locator('');
    this.maternity = {
      reportLink: this.page.locator(''),
      maternityAllowanceReport: this.page.locator(''),
      dateFrom: this.page.locator(''),
      showReportBtn: this.page.locator(''),
      tableRowLocator: this.page.locator(''),
      createdOn: this.page.locator(''),
      dataType: this.page.locator(""),
    };
  }

  /**
   * @Test8
   * @description This method verifies the functionality of the Maternity Allowance Report.
   * It navigates to the Maternity module, accesses the report section, and opens the Maternity Allowance Report.
   * Initially, it ensures that the data grid is not visible, selects a date range by entering the 'from date,'
   * and clicks the 'Show Report' button. Finally, it waits for the report to load and asserts that the data grid becomes visible.
   * Throws an error if the data grid visibility states do not match the expected outcomes.
   */
  public async verifyMaternityAllowanceReport() {
    // write your logic here
  }
}
