angular.module('ServiceModule')
	.factory('EmpleadosService', ['$http', function($http) {
	
	var url = '/empleados';
	
	return {
		consultarTodos : function() {
			console.log('Query All... ');
			return $http.get(url);
		},
		
		guardarEmpleado : function(empleado) {
			console.log('Save Service... ', empleado);
			return $http.post(url, empleado);	
		},
		
		borrarEmpleado : function(pk) {
			console.log('Delete Service... ', pk);
			params ={params: {"id":pk}};
			return $http.delete(url, params);
		},
		
		consultarEmpleado : function(nombre) {
			console.log('Query Service... ', nombre);
			config ={method:"GET",
					 url:url+"/find",
					 params: {"nombre":nombre}};
			return $http(config);
		}
		
	};
}])
