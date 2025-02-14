import { Page, Locator } from "@playwright/test";

export default class PharmacyPage {
  readonly page: Page;
  private pharmacyModule: Locator;
  private orderLink: Locator;
  private addNewGoodReceiptButton: Locator;
  private goodReceiptModalTitle: Locator;
  private printReceiptButton: Locator;
  private addNewItemButton: Locator;
  private itemNameField: Locator;
  private batchNoField: Locator;
  private itemQtyField: Locator;
  private rateField: Locator;
  private saveButton: Locator;
  private supplierNameField: Locator;
  private invoiceField: Locator;
  private successMessage: Locator;
  private supplierName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pharmacyModule = page.locator('');
    this.orderLink = page.locator('');
    this.addNewGoodReceiptButton = page.locator("");
    this.goodReceiptModalTitle = page.locator(``);
    this.printReceiptButton = page.locator(``);
    this.addNewItemButton = page.locator(``);
    this.itemNameField = page.locator(``);
    this.batchNoField = page.locator('');
    this.itemQtyField = page.locator('');
    this.rateField = page.locator('');
    this.saveButton = page.locator('');
    this.supplierNameField = page.locator('');
    this.invoiceField = page.locator('');
    this.successMessage = page.locator('');
    this.supplierName = page.locator('');
  }

  /**
   * @Test1
   * @description This method navigates to the Pharmacy module, verifies the Good Receipt modal,
   * handles alerts during the Good Receipt print process, and ensures the modal is visible
   * before performing further actions.
   */
  async handlingAlertOnRadiology() {
    // write your logic here
  }

  /**
   * @Test2
   * @description This method verifies the process of adding a new Good Receipt in the Pharmacy module,
   * filling in item details such as item name, batch number, quantity, rate, supplier name,
   * and a randomly generated invoice number. It concludes by validating the successful printing of the receipt.
   */
  async verifyPrintReceipt() {
    // write your logic here
  }
}
