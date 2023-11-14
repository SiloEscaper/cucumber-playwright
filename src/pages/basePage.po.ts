import { ILocator } from '../helpers/dataTypes';
import { Waiters } from '../helpers/waiters';
import { StringUtils } from '../helpers/stringUtils';
import { config } from '../support/config';
import { ElementUtils } from '../helpers/elementUtils';
import { Assertions } from '../helpers/assertions';
import { Page } from '@playwright/test';
import { Actions } from '../helpers/actions';

export class BasePagePo {
  public homeBodyLocator: ILocator;
  public headerLocator: ILocator;
  public navLinkLocator: ILocator;
  public getItTouchBtnLocator: ILocator;
  public waiters: Waiters;
  public actions: Actions;
  public elementUtils: ElementUtils;
  public stringUtils: StringUtils;
  public assertions: Assertions;
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;

    this.waiters = new Waiters(page);
    this.actions = new Actions(page);
    this.assertions = new Assertions();
    this.elementUtils = new ElementUtils(page);
    this.stringUtils = new StringUtils();

    this.homeBodyLocator = {
      selector: 'body.home',
      definition: 'Base Page "SAP Fioneer"',
    };
    this.headerLocator = {
      selector: '#header',
      definition: 'Header on base page',
    };
    this.navLinkLocator = {
      selector: '.nav-top-link',
      definition: `Header's bookmarks links`,
    };
    this.getItTouchBtnLocator = {
      selector: '#header .header-button',
      definition: `"Get in touch" button`,
    };
  }

  public async openBasePage(): Promise<void> {
    const basePageUrl: string = config.BASE_URL;

    await this.page.goto(basePageUrl, { timeout: 80000 });

    // waitForLoadState - doesn't work so timeout's used
    // await this.page.waitForLoadState();

    await this.waiters.waitForElementVisible(this.homeBodyLocator);
  }

  public async checkHeaderBookmarks(bookmarks: string[]): Promise<void> {
    const isNavLink: boolean = await this.elementUtils.isElementVisibleByLocator(
      this.headerLocator,
    );
    await this.assertions.expectToEqual(isNavLink, true);

    const bookMarksListText: string[] = await this.elementUtils.getTextListByLocator(
      this.navLinkLocator,
    );

    await this.assertions.expectToHaveOrderedMembers(
      // get rid of empty lines -> returns true values only
      bookMarksListText.filter((item) => item),
      bookmarks,
      `Header's bookmarks are incorrect`,
    );
  }

  public async selectOptionFromDropDown(dropdownOption: string, bookmark: string): Promise<void> {
    await this.actions.hoverByLocatorText(this.navLinkLocator, bookmark);
    await this.actions.clickByLinkRole('link', dropdownOption, true);
  }

  public async clickGetInTouchBtn(): Promise<void> {
    await this.actions.clickByLocator(this.getItTouchBtnLocator);
  }
}
