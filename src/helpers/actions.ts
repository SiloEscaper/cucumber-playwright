import { ILocator, LinkRoleType } from './dataTypes';
import { ElementUtils } from './elementUtils';
import { Locator, Page } from '@playwright/test';

export class Actions {
  private page: Page;
  private elementUtils: ElementUtils;
  // private waiters: Waiters;

  public dropDownOption: ILocator;
  public dropDownList: ILocator;
  public dropDownScrollContainer: ILocator;

  constructor(page: Page) {
    this.page = page;
    this.elementUtils = new ElementUtils(page);
    // this.waiters = new Waiters(page);

    this.dropDownOption = {
      selector: '.mat-option.ng-star-inserted .mat-option-text',
      definition: 'Dropdown Option',
    };
    this.dropDownList = {
      selector: 'div.mat-select-panel',
      definition: 'Dropdown List',
    };
    this.dropDownScrollContainer = {
      selector: '.mat-select-panel .cdk-virtual-scroll-viewport',
      definition: 'Dropdown Scroll Container',
    };
  }

  public async clickByLocator(
    locator: ILocator,
    frameLocator?: string,
    index: number = 0,
    force: boolean = false,
    delay: number = 0,
  ): Promise<void> {
    const pageElement: Locator = await this.elementUtils.getElementByLocator(
      locator,
      frameLocator,
      index,
    );
    await pageElement.click({ force, delay });
  }
  public async clickByLinkRole(
    roleType: LinkRoleType,
    dropdownOption: string,
    force: boolean = false,
    delay: number = 0,
  ): Promise<void> {
    await this.page.getByRole(roleType, { name: dropdownOption }).click({ force, delay });
  }

  public async hoverByLocator(
    locator: ILocator,
    index: number = 0,
    force: boolean = false,
  ): Promise<void> {
    const pageElement: Locator = await this.elementUtils.getElementByLocator(locator, '', index);
    await pageElement.hover({ force });
  }

  public async hoverByLocatorText(
    locator: ILocator,
    text: string,
    index: number = 0,
    force: boolean = false,
  ): Promise<void> {
    const pageElement: Locator = await this.elementUtils.getElementByLocatorAndText(
      locator,
      text,
      index,
    );
    await pageElement.hover({ force });
  }
}
