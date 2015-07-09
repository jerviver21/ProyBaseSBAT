angular.module('PCtrlMod')
	.directive('detEmpleado', [function() {
		return {
			templateUrl: 'dir_emp.html',
			restrict: 'A',
			scope: {
				empleado: '='
			},
			link: function($scope, $element, $attrs) {
				console.log("Procesando......");
				$scope.saludar = function(emp) {
					return "Hola "+emp.nombre;
				};
			}
		}
}]).directive('fundooRating', function () {
    return {
      template: '<input type="text"></input>',
      restrict: 'A',
      link: function (scope, elem, attrs) {
        console.log("Recognized the fundoo-rating directive usage");
      }
    }
 });