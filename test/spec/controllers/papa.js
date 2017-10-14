'use strict';

describe('Controller: PapaCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPruebasApp'));

  var PapaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PapaCtrl = $controller('PapaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PapaCtrl.awesomeThings.length).toBe(3);
  });
});
