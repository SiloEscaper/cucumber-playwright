import { Then, When } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/custom-world';
import { Page } from '@playwright/test';
import { GetInTouchPo } from '../pages/getInTouch.po';
import { completeAllRequiredFieldsMessage, countryErrorMessage } from '../testData/errorMessages';

When(/^the user clicks on 'Submit' button on empty contact$/, async function (this: ICustomWorld) {
  const page: Page = this.page!;
  const getInTouchPo: GetInTouchPo = new GetInTouchPo(page);

  await getInTouchPo.actions.clickByLocator(
    getInTouchPo.submitBtnLocator,
    getInTouchPo.iframeLocator,
  );
});

Then(/^validation messages are displayed correctly on the page$/, async function (this: ICustomWorld) {
    const page: Page = this.page!;
    const getInTouchPo: GetInTouchPo = new GetInTouchPo(page);

    // Validation of error messages under inputs
    await getInTouchPo.validateErrorMessageUnderInput(getInTouchPo.firstNameErrorMessageLocator);
    await getInTouchPo.validateErrorMessageUnderInput(getInTouchPo.lastNameErrorMessageLocator);
    await getInTouchPo.validateErrorMessageUnderInput(getInTouchPo.workEmailErrorMessageLocator);
    await getInTouchPo.validateErrorMessageUnderInput(
      getInTouchPo.countryErrorMessageLocator,
      0,
      countryErrorMessage,
    );
    await getInTouchPo.validateErrorMessageUnderInput(getInTouchPo.helpErrorMessageLocator);

    // Validation of error messages under checkboxes
    const errorMessageUnderCheckboxIndex: number = 5;
    const lastErrorMessageIndex: number = 6;
    await getInTouchPo.validateErrorMessage(
      getInTouchPo.fieldErrorLocator,
      errorMessageUnderCheckboxIndex,
    );
    await getInTouchPo.validateErrorMessage(
      getInTouchPo.fieldErrorLocator,
      lastErrorMessageIndex,
      completeAllRequiredFieldsMessage,
    );
  },
);
