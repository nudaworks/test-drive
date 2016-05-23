// objects/colleagues.js

var Colleagues = function(){
    this.get = function(){
        browser.get(browser.baseUrl);
    };

    this.search = function(query){
        var searchInput = element(by.model('vm.searchQuery'));
        searchInput.sendKeys(query);
    };

    this.getSearchResults = function(){
        return element(by.css('.search-results.ng-scope')).all(by.tagName('a'));
    };

    this.pickPersonByCoords = function(x,y){
        return element(by.css('[ng-x^="' + x + '"][ng-y^="' + y + '"]'));
    };

    this.getPickedPersonContainer = function(){
        return element(by.css('[ng-if="vm.selectedPerson"]'));
    };

    this.getPickedPersonContainerElements = function(){
        return {
            container: element(by.css('[ng-if="vm.selectedPerson"]')),
            name: element(by.css('[ng-bind^="vm.selectedPerson.name"]')),
            room: element(by.css('[ng-bind="vm.selectedPerson.room"]')),
            place: element(by.css('[ng-bind="vm.selectedPerson.place"]'))
        };
    };

    this.init = function(){
    };

    this.init();
};

module.exports = Colleagues;