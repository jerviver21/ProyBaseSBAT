// Test para: empleados/empleados_controller.js
describe('Controller: EmpleadosCtrl', function() {
	// Instantiate a new version of my module before each test
	beforeEach(module('EmpleadosModule'));
	var ctrl;
	// Before each unit test, instantiate a new instance
	// of the controller
	beforeEach(inject(function($controller) {
		ctrl = $controller('EmpleadosCtrl');
	}));
	
	it('Configuration OK', function() { 
		expect(1).toEqual(1);
	});
	
});