import { Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../support/custom-world';
import { Page } from '@playwright/test';
import { CommonPo } from '../pages/common,po';
import { PageEnum } from '../enums/pageEnum';
import { contactPageUrl, financialPageUrl } from '../testData/urlData';

Then(/^the user is on (.*) page$/, async function (this: ICustomWorld, pageTitle: string) {
  const page: Page = this.page!;
  const commonPo: CommonPo = new CommonPo(page);

  let pageUrl: string;

  switch (pageTitle) {
    case PageEnum.FinancialControl:
      pageUrl = financialPageUrl;
      break;
    case PageEnum.GetInTouch:
      pageUrl = contactPageUrl;
      break;
    default:
      throw new Error(`Provided value - '${pageTitle}' doesn't meet requirements`);
  }

  await commonPo.waiters.waitUntilURLContains(pageUrl);
  await commonPo.waiters.waitForElementVisible(commonPo.titleLocator);

  const actualPageTitle: string = await commonPo.elementUtils.getTextByLocator(
    commonPo.titleLocator,
  );

  await commonPo.assertions.expectToEqual(
    actualPageTitle,
    pageTitle,
    `Title - '${pageTitle}' is incorrect on the page '${pageTitle}'`,
  );
});
