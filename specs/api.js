// spec.ts

describe('Light IT: API', function() {


    it('basic', function(){
        var x = browser.driver.get(browser.baseUrl);
        browser.takeScreenshot();
        console.log(x);
    });

});
