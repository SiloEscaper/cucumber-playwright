import { BasePagePo } from './basePage.po';
import { ILocator } from '../helpers/dataTypes';
import { Page } from '@playwright/test';
import { defaultErrorMessage } from '../testData/errorMessages';

export class GetInTouchPo extends BasePagePo {
  public submitBtnLocator: ILocator;
  public fieldErrorLocator: ILocator;
  public firstNameBlockLocator: ILocator;
  public lastNameBlockLocator: ILocator;
  public workEmailBlockLocator: ILocator;
  public countryBlockLocator: ILocator;
  public helpBlockLocator: ILocator;
  public firstNameInputLocator: ILocator;
  public firstNameErrorMessageLocator: ILocator;
  public lastNameErrorMessageLocator: ILocator;
  public workEmailErrorMessageLocator: ILocator;
  public countryErrorMessageLocator: ILocator;
  public helpErrorMessageLocator: ILocator;
  public iframeLocator: string;

  constructor(page: Page) {
    super(page);

    // Frame locator (Contact form)
    this.iframeLocator = 'iframe.hs-form-iframe';

    this.submitBtnLocator = {
      selector: '[value=Submit]',
      definition: 'Submit button',
    };
    this.fieldErrorLocator = {
      selector: '.hs-error-msgs',
      definition: 'Field Error messages',
    };
    // Blocks locators
    this.firstNameBlockLocator = {
      selector: '.hs_firstname',
      definition: 'First Name block',
    };
    this.lastNameBlockLocator = {
      selector: '.hs_lastname',
      definition: 'Last Name block',
    };
    this.workEmailBlockLocator = {
      selector: '.hs_email',
      definition: 'Work email block',
    };
    this.countryBlockLocator = {
      selector: '[class^="hs_country"]',
      definition: 'Country block',
    };
    this.helpBlockLocator = {
      selector: '[class^="hs_how_can_we_help_you"]',
      definition: 'Help block',
    };
    // Inputs locators e.g.
    this.firstNameInputLocator = {
      selector: `${this.firstNameBlockLocator.selector} input`,
      definition: 'First Name input',
    };
    // Fields error locators
    this.firstNameErrorMessageLocator = {
      selector: `${this.firstNameBlockLocator.selector} ${this.fieldErrorLocator.selector}`,
      definition: 'First Name error message',
    };
    this.lastNameErrorMessageLocator = {
      selector: `${this.lastNameBlockLocator.selector} ${this.fieldErrorLocator.selector}`,
      definition: 'Last Name error message',
    };
    this.workEmailErrorMessageLocator = {
      selector: `${this.workEmailBlockLocator.selector} ${this.fieldErrorLocator.selector}`,
      definition: 'Work email error message',
    };
    this.countryErrorMessageLocator = {
      selector: `${this.countryBlockLocator.selector} ${this.fieldErrorLocator.selector}`,
      definition: 'Country error message',
    };
    this.helpErrorMessageLocator = {
      selector: `${this.helpBlockLocator.selector} ${this.fieldErrorLocator.selector}`,
      definition: 'Help error message',
    };
  }

  public async validateErrorMessageUnderInput(
    locator: ILocator,
    index: number = 0,
    errorMessage: string = defaultErrorMessage,
  ): Promise<void> {
    const actualErrorMessage: string = await this.elementUtils.getTextByLocator(
      locator,
      this.iframeLocator,
      index,
    );

    await this.assertions.expectToEqual(
      actualErrorMessage,
      errorMessage,
      `The actual error message '${actualErrorMessage}' doesn't equal 
            '${errorMessage}' under input - '${locator.definition}'`,
    );
  }

  public async validateErrorMessage(
    locator: ILocator,
    index: number = 0,
    errorMessage: string = defaultErrorMessage,
  ): Promise<void> {
    const actualErrorMessage: string[] = await this.elementUtils.getTextListByLocator(
      locator,
      this.iframeLocator,
    );

    await this.assertions.expectToEqual(
      actualErrorMessage[index!],
      errorMessage,
      `The actual error message '${actualErrorMessage[index!]}' doesn't equal '${errorMessage}'`,
    );
  }
}
