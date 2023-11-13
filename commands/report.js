const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: `reports/`,
  reportPath: `reports/`,
  customMetadata: true,
  displayDuration: true,
  pageTitle: 'Fioneer Report',
  openReportInBrowser: true,
  metadata: {
    browser: { name: 'Browser', value: 'Chrome'},
  },
  customData: {
    title: 'SAP Fioneer Report',
    data: [
      {label: 'Project', value: 'Fioneer'},
      {label: 'Browser', value: 'Chrome'}
    ]
  }
});
