angular.module('EmpleadosModule')
	.controller('EmpleadosCtrl', ['EmpleadosService', function(EmpleadosService) {
		var self = this;
		self.empleados = [];
		
		
		self.consultarTodos = function() {
			EmpleadosService.consultarTodos()
			.then(function(response) {
				self.empleados = response.data;
			}, function(errResponse) {
				console.error('Error consultando el servicio ... ');
			});
		};
		
		self.guardarEmpleado = function() {
			EmpleadosService.guardarEmpleado(self.empleado)
			.then(function(response) {
				self.empleado = {};
			}, function(errResponse) {
				console.error('Error guardando... ');
			});		

		};
		
		self.borrarEmpleado = function(pk) {
			EmpleadosService.borrarEmpleado(pk)
			.then(function(response) {
				console.log('empleado '+pk+' borrado con exito');
			}, function(errResponse) {
				console.error('Error consultando el servicio ... ');
			});
		};
		
		self.consultarEmpleado = function(nombre) {
			EmpleadosService.consultarEmpleado(nombre)
			.then(function(response) {
				self.empleado = response.data;
			}, function(errResponse) {
				console.error('Error consultando el servicio ... ');
			});
			
		};
		
		self.consultarTodos();
		
	}]
)