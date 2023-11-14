import { BasePagePo } from './basePage.po';
import { Page } from '@playwright/test';
import { ILocator } from '../helpers/dataTypes';

export class CommonPo extends BasePagePo {
  public titleLocator: ILocator;

  constructor(page: Page) {
    super(page);
    this.titleLocator = {
      selector: '[class="section dark"] [class="col-inner"] h3',
      definition: `Page's Title`,
    };
  }
}
