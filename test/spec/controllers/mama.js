'use strict';

describe('Controller: MamaCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPruebasApp'));

  var MamaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MamaCtrl = $controller('MamaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MamaCtrl.awesomeThings.length).toBe(3);
  });
});
