// objects/auth.js

var Auth = function(){

    this.get = function(){
        browser.get(browser.baseUrl + 'login');
    };

    this.login = function(login, pswd) {
        if (!login || !pswd) return;

        var
            loginInput = element(by.css('[name="username"]')),
            pswdInput = element(by.css('[name="password')),
            loginButt = element(by.buttonText('Login'));

        loginInput.sendKeys(login);
        pswdInput.sendKeys(pswd);
        loginButt.click();
    };

    this.logout = function(){
        var
            logoutButt = element(by.css('[href="/logout"]'));

        logoutButt.click();
    };

    this.init = function(){
    };

    this.init();
};

module.exports = Auth;