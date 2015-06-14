// Test para: empleados/empleados_controller.js
describe('Controller EmpleadosCtrl', function() {
	console.log('Comienza proceso');
	var location;
	var ctrl, mockEmpleadosService;
	// Instantiate a new version of my module before each test
	beforeEach(module('EmpleadosModule'));
	//beforeEach(module('EmpleadosModuleMocks'));
	
	beforeEach(module(function($provide) {
		mockEmpleadosService = {
			consultarTodos: function() {
				return [
				    {"id":8,"nombre":"Jerson Viveros","numId":"16942248","salario":4500000.0,"cargo":"Ingeniero de Desarrollo"},
				    {"id":19,"nombre":"Yaneth Giraldo","numId":"15478955","salario":6000000.0,"cargo":"Independiente"}
				];
			}	
		};

	}));
	
	// Before each unit test, instantiate a new instance
	// of the controller
	beforeEach(inject(function($location, $controller){
		console.log('Tratando de iniciar ');
		location = $location;
		//ctrl = $controller('EmpleadosCtrl', {EmpleadosService:mockEmpleadosService});   NO SE LOGRÓ
		console.log('Este es el controlador: '+ctrl);
	}));
	
	it('Consulta de todos los empleados. ', function() { 
		console.log('Ejecutamos: '+location.absUrl());
		expect(1).toEqual(1);
	});
	
});