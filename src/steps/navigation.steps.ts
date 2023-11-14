import { ICustomWorld } from '../support/custom-world';
import { addLog } from '../helpers/stepUtils';
import { config } from '../support/config';
import { BasePagePo } from '../pages/basePage.po';
import { Page } from '@playwright/test';
import { Given } from '@cucumber/cucumber';

Given(/^the user is at the base page$/, async function (this: ICustomWorld) {
  const page: Page = this.page!;
  const basePage: BasePagePo = new BasePagePo(page);

  await addLog({ context: this, log: `Load the base page: '${config.BASE_URL}'` });

  await basePage.openBasePage();
});
