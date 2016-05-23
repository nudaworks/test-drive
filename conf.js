exports.config = {
    // connect to browser drivers
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // what test to run
    noGlobals: false,
    suites: {
        all: './specs/*.js',
        api: './specs/api.js',
        auth: './specs/auth.js',
        colleagues: './specs/colleagues.js'
    },

    // set up browsers
    multiCapabilities: [
        {
            browserName: 'chrome',
            count: 1,
            maxInstances: 1
        }
    ],

    // global info
    baseUrl: 'http://locator.light-it.loc/',
    allScriptsTimeout: 11000,
    getPageTimeout: 10000,
    resultJsonOutputFile: 'output.json',

    // test framework
    jasmineNodeOpts: {
        showColors: true
    },

    ignoreSynchronization: true // If you need to navigate to a page which does not use Angular, you can turn off waiting for Angular by setting browser.
};

// если не работает хоть один компонент - не работает вся система
// проверить доступность страниц
// проверить выходные данные
// отлавливать сервеные ошибки
// мониторинг серверных ресурсов (профайлинг)
// E2E не тестируют JS
