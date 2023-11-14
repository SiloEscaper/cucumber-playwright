import { ILocator } from './dataTypes';
import { expect, Locator, Page } from '@playwright/test';

export class Waiters {
  private page: Page;
  public readonly timeout: number = 40000;

  constructor(page: Page) {
    this.page = page;
  }

  public async waitForElementVisible(
    locator: ILocator,
    locatorIndex: number = 0,
    timeout: number = this.timeout,
  ): Promise<void> {
    // const pageElement: Locator = await this.elementUtils.getElementByLocator(locator, '', locatorIndex);
    const pageElement: Locator = await this.page.locator(locator.selector).nth(locatorIndex);

    await expect(
      pageElement,
      `The element with locator '${locator.selector}' isn't visible after wait timeout`,
    ).toBeVisible({ timeout });
  }

  public async waitUntilURLContains(expectedString: string): Promise<void> {
    const currentUrl: string = this.page.url();
    await expect(
      currentUrl,
      `URL doesn't contain the '${expectedString}' after wait timeout`,
    ).toContain(expectedString);
  }
}
