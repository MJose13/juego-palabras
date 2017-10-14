'use strict';

describe('Controller: PatoCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPruebasApp'));

  var PatoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PatoCtrl = $controller('PatoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PatoCtrl.awesomeThings.length).toBe(3);
  });
});
