angular.module('EmpleadosModule')
	.controller('EmpleadosCtrl', ['$http', function($http) {
		var self = this;
		var url = '/empleados';
		var config = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
		self.empleados = [];
		
		
		self.consultarTodos = function() {
			$http.get(url).then(function(response) {
				self.empleados = response.data;
			}, function(errResponse) {
				console.error('Error consultando el servicio ... ');
			});
		};
		
		self.guardarEmpleado = function() {
			console.log('... ', self.empleado);
			
			$http.post(url, self.empleado)
			.then(function(response) {
				self.empleado = {};
			}, function(errResponse) {
				console.error('Error guardando... ');
			});		
			
			self.consultarTodos();
		};
		
		self.borrarEmpleado = function(pk) {
			console.log('xxx ', pk);

			params ={params: {"id":pk}};
			$http.delete(url, params)
			.then(function(response) {
				self.empleado = response.data;
			}, function(errResponse) {
				console.error('Error consultando el servicio ... ');
			});
			self.consultarTodos();
		};
		
		self.consultarEmpleado = function(nombre) {
			console.log('xxx ', nombre);

			params ={params: {"nombre":nombre}};
			
			$http.get(url+'/find', params)
			.then(function(response) {
				self.empleado = response.data;
			}, function(errResponse) {
				console.error('Error consultando el servicio ... ');
			});
			
		};
		
		self.consultarTodos();
		
	}]
)