// Test para: empleados/empleados_controller.js
describe('Controller: EmpleadosCtrl', function() {
	// Instantiate a new version of my module before each test
	beforeEach(module('EmpleadosModule'));
	var ctrl, empleadosService;
	// Before each unit test, instantiate a new instance
	// of the controller
	beforeEach(inject(function($controller, EmpleadosService) {
		spyOn(EmpleadosService, 'consultarTodos');
		empleadosService = EmpleadosService;
		ctrl = $controller('EmpleadosCtrl');
	}));
	
	/*it('Test consulta de todos los empleados. ', function() { 
		ctrl.consultarTodos();
		expect(ctrl.empleados).toEqual([
		                {"id":8,"nombre":"Jerson Viveros","numId":"16942248","salario":4500000.0,"cargo":"Ingeniero de Desarrollo"}
		                ]);
	});*/
	
	/*it('Test guardar nuevo empleado ', function() { 
		ctrl.consultarTodos();
		ctrl.empleado = {"id":19,"nombre":"Yaneth Giraldo","numId":"15478955","salario":6000000.0,"cargo":"Independiente"};
		ctrl.guardarEmpleado();
		expect(empleadosService.guardarEmpleado).toHaveBeenCalled();
		expect(empleadosService.guardarEmpleado.callCount).toEqual(1);
		expect(empleadosService.consultarTodos).toHaveBeenCalled();
		expect(empleadosService.consultarTodos.callCount).toEqual(1);
	});*/
	
	
	
});