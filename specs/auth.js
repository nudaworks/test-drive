// specs/auth.js

var Auth = require('../page-objects/auth.js');

describe('Light IT: page Login/logout', function(){
    var auth = new Auth();

    it('login and redirect to host root', function(){
        auth.get();
        auth.login('qweqwe','qweqwe');
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });

    it('logout', function(){
        auth.logout();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
    });

});
