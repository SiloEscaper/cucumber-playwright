import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import { BrowserContext, Page, PlaywrightTestOptions } from '@playwright/test';
import { ICreateAttachment, ICreateLog } from '@cucumber/cucumber/lib/runtime/attachment_manager';

export interface CucumberWorldConstructorParams {
  parameters: { [key: string]: string };
}

export interface ICustomWorld extends World {
  debug?: boolean;
  feature?: messages.Pickle;
  page?: Page;

  testName?: string;
  startTime?: Date;
  playwrightOptions?: PlaywrightTestOptions;
  context?: BrowserContext;
  attach: ICreateAttachment;
  log: ICreateLog;
  parameters: CucumberWorldConstructorParams;

  [key: string]: any;
}

export class CustomWorld extends World {
  debug = false;
  [key: string]: any;
  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
