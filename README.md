# cucumber-playwright
The repo's made for SAP Fioneer Challenge purposes.
For writing E2E tests based on Cucumber with Playwright(TS).

# Why cucumber?
I think that Cucumber's usage can be useful when other team players aren't able to get through all of framework's context.
Gherkin syntax is much more readable than TDD concept.

## Tests location
Tests(cucumber features) are located 'features'

## To run the tests
`npm run test` or `npx cucumber-js` runs all tests
`npm run test <feature name>` or `npx cucumber-js <feature name>` run the single feature
`npx cucumber-js --tags "@GetInTouch"` to run a specific scenario by tags
`cucumber-js --parallel=2"` to run scenarios in parallel
`npm run local"` to run a test with html-cucumber report at the end 

## Browser selection
By default we use Chrome. You can define an environment variable called BROWSER and
set the name of the browser. Available options: chromium, firefox, webkit

## To ignore a scenario

- tag the scenario with `@ignore`

## To check for typescript, linting and gherkin errors

- run the command `npm run build`.

## To view the steps usage

- run the command `npm run steps-usage`.

## To view the html report of the last run

- run the command `npm run report`. - It doesn't work right now

## To view allure report
- run the command `npm run allure`. - It doesn't work right now

