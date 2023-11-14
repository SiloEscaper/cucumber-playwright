import { ICustomWorld } from '../support/custom-world';
import { BasePagePo } from '../pages/basePage.po';
import { headerBookmarks } from '../testData/headerData';
import { Then, When } from '@cucumber/cucumber';
import { Page } from '@playwright/test';

Then(/^the bookmarks are visible and have following content on the page$/, async function (this: ICustomWorld) {
    const page: Page = this.page!;
    const basePage: BasePagePo = new BasePagePo(page);

    await basePage.checkHeaderBookmarks(headerBookmarks);
  },
);

When(/^the user selects (.*) inside (.*) bookmark$/, async function (this: ICustomWorld, dropdownOption: string, bookmark: string) {
    const page: Page = this.page!;
    const basePage: BasePagePo = new BasePagePo(page);

    await basePage.selectOptionFromDropDown(dropdownOption, bookmark);
  },
);

When(/^the user clicks on 'Get in touch' button$/, async function (this: ICustomWorld) {
  const page: Page = this.page!;
  const basePage: BasePagePo = new BasePagePo(page);

  await basePage.clickGetInTouchBtn();
});
