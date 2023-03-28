const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/reports',
	reportPath: 'cypress/reports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'WonderLabz Project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'SPT 13. Q3'},
            {label: 'Execution Start Time', value: 'MAR 30 2023, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'MAR 30 2023, 02:32 PM EST'}
            
        ]
    }
});