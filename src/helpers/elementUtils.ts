import { ILocator } from './dataTypes';
import { expect, Locator, Page } from '@playwright/test';

export class ElementUtils {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async getElementByLocator(
    locator: ILocator,
    frameLocator?: string,
    index: number = 0,
  ): Promise<Locator> {
    try {
      return frameLocator
        ? await this.page.frameLocator(frameLocator).locator(locator.selector).nth(index)
        : await this.page.locator(locator.selector).nth(index);
    } catch (e) {
      throw new Error(
        `${e}. Unable to get locator '${locator.definition}' - '${locator.selector}'`,
      );
    }
  }

  public async getElementByLocatorAndText(
    locator: ILocator,
    text: string,
    index: number = 0,
  ): Promise<Locator> {
    try {
      return await this.page.locator(locator.selector, { hasText: text }).nth(index);
    } catch (e) {
      throw new Error(
        `${e}. Unable to get locator '${locator.definition}' - '${locator.selector}'`,
      );
    }
  }

  public async isElementVisibleByLocator(locator: ILocator, timeout?: number): Promise<boolean> {
    const pageElement: Locator = await this.page.locator(locator.selector);
    try {
      await expect(pageElement).toBeVisible({ timeout });

      return true;
    } catch (e) {
      return false;
    }
  }

  public async getTextByLocator(
    locator: ILocator,
    frameLocator?: string,
    index: number = 0,
  ): Promise<string> {
    try {
      const pageElement: Locator = await this.getElementByLocator(locator, frameLocator, index);

      return await pageElement.innerText();
    } catch (e) {
      throw new Error(
        `${e}. Unable to get text from locator '${locator.definition}' - '${locator.selector}'`,
      );
    }
  }

  public async getTextListByLocator(locator: ILocator, frameLocator?: string): Promise<string[]> {
    try {
      return frameLocator
        ? await this.page.frameLocator(frameLocator).locator(locator.selector).allInnerTexts()
        : await this.page.locator(locator.selector).allInnerTexts();
    } catch (e) {
      throw new Error(
        `${e}. Unable to get text list from locator '${locator.definition}' - '${locator.selector}'`,
      );
    }
  }
}
