// specs/auth.js

var Colleagues = require('../page-objects/colleagues.js');

describe('Light IT', function(){
    var colleagues = new Colleagues();
    var names = [
        'Алексей',
        'Сергей'
    ];

    describe('Using search', function(){

        names.forEach(function(v, i){
            it('search query=' + v + ' return results', function(){
                colleagues.get();
                colleagues.search(v);
                expect(colleagues.getSearchResults().count()).toBeGreaterThan(0);
            });
        });

    });

    describe('Colleagues on SVG-map', function(){
        colleagues.get();
        colleagues.pickPersonByCoords(629,44).click();

        it('When you pick a person by its coorditates there should be a container with info', function(){
            expect(element(by.css('[ng-if="vm.selectedPerson"]')).isPresent()).toBe(true);
        });

    });


});
