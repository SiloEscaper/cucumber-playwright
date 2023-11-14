import { expect } from 'chai';

export class Assertions {
  public async expectToInclude(
    result: never,
    expectedResult: never,
    errorMessage?: string,
  ): Promise<void> {
    await expect(result).to.include(
      expectedResult,
      errorMessage + `\nexpected: [${expectedResult}]\nresult: [${result}]\n`,
    );
  }

  public async expectToNotEqual(
    result: never,
    expectedResult: never,
    errorMessage?: string,
  ): Promise<void> {
    await expect(result).to.not.equal(expectedResult, errorMessage);
  }

  public async expectToHaveOrderedMembers(
    result: string[],
    expectedResult: string[],
    errorMessage?: string,
  ): Promise<void> {
    await expect(result).to.have.ordered.members(
      expectedResult,
      errorMessage + `\nexpected: [${expectedResult}]\nresult: [${result}]\n`,
    );
  }

  public async expectToHaveMembers(
    result: never[],
    expectedResult: never[],
    errorMessage?: string,
  ): Promise<void> {
    await expect(result).to.have.members(
      expectedResult,
      errorMessage + `\nexpected: [${expectedResult}]\nresult: [${result}]\n`,
    );
  }

  public async expectToEqual(
    result: any,
    expectedResult: any,
    errorMessage?: string,
  ): Promise<void> {
    await expect(result).to.equal(
      expectedResult,
      errorMessage + `\nexpected: [${expectedResult}]\nresult: [${result}]\n`,
    );
  }
}
