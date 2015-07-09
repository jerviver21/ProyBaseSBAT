angular.module('Emp2Module')
	.directive('detalleEmpleado', [function() {
		return {
			templateUrl: 'js/app/directives/empleado.html',
			restrict: 'A',
			scope: {
				empleado: '='
			},
			link: function($scope, $element, $attrs) {
				$scope.saludar = function(emp) {
					return "Hola "+emp.nombre;
				};
			}
		};
}]);