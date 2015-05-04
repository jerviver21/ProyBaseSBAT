angular.module('EmpleadosModule')
	.controller('EmpleadosCtrl', ['$http', function($http) {
		var self = this;
		self.empleados = [];
		
		$http.get('/empleados').then(function(response) {
			self.empleados = response.data;
		}, function(errResponse) {
			console.error('Error consultando el servicio ... ');
		});
		
	}]
)