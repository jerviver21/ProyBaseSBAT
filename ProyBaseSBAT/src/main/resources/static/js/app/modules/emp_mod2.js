// File: chapter10/routing-example/app/scripts/app.js
angular.module('Emp2Module', ['ngRoute','ServiceModule'])
	.config(function($routeProvider) {
		
		$routeProvider.when('/', {
			templateUrl: '/emp_listado',
			controller: 'EmpListCtrl as ctrl'
		})
		.when('/emp_login', {
			templateUrl: '/emp_login'
		})
		.when('/emp_logout', {
			templateUrl: '/emp_listado',
			controller: 'EmpListCtrl as ctrl',
			resolve: {
				auth: ['UsuariosService', function(UsuariosService) {
					return UsuariosService.logout().then(
							function(success) {},
							function(err) {});
				}]
			}
		})
		.when('/emp_detalle/:nombre', {
			templateUrl: '/emp_detalle',
			controller:'EmpDetalleCtrl as ctrl',
			resolve: {
				auth: ['$q', '$location', 'UsuariosService', function($q, $location, UsuariosService) {
					return UsuariosService.session().then(
							function(success) {},
							function(err) {
								$location.path('/emp_login');
								$location.replace();
								return $q.reject(err);
							});
				}]
			}
		});

		$routeProvider.otherwise({
			redirectTo: '/'
		});
});