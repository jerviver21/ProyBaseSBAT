angular.module('RoutingModule')
	.controller('MainCtrl', ['UsuariosService', function(UsuariosService) {
		var self = this;
		self.userService = UsuariosService;
		UsuariosService.session();
	}])
	.controller('EmpListCtrl', ['EmpleadosService',function(EmpleadosService) {
		var self = this;
		self.empleados = [];
		EmpleadosService.consultarTodos().then(function(resp) {
			self.empleados = resp.data;
		});
	}])
	.controller('LoginCtrl', ['UsuariosService', '$location', function(UsuariosService, $location) {
		var self = this;
		self.user = {usuario: '', clave: ''};
		self.login = function() {
			UsuariosService.login(self.user).then(function(success) {
				$location.path('/emp_listado');
			}, function(error) {
				self.errorMessage = error.data.msg;
			})
		};
	}])
	.controller('EmpDetalleCtrl',['$location', '$routeParams', 'EmpleadosService',
	                              function($location, $routeParams, EmpleadosService) {
		var self = this;
		self.empleado = {};
		EmpleadosService.consultarEmpleado($routeParams.nombre).then(function(resp){
			self.empleado = resp.data;
		}, function(error){
			$location.path('/emp_login');
		});
	}]);