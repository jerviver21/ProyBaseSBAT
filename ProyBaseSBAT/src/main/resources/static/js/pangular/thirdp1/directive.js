angular.module("thirdPartModule")
	.directive('noUiSlider', [function() {
		return {
			restrict: 'E',
			require: 'ngModel',
			link: function($scope, $element, $attr, ngModelCtrl) {
				
				//Se llama al constructor de la libreria
				$element.noUiSlider({
										start: 0,
										range: {
											min: Number($attr.rangeMin),
											max: Number($attr.rangeMax)
										}
				});
				
				//Se sobreescribe el método $render de ng-model, si cambia el valor de ng-model, se le avisa 
				//a la libreria uislider
				ngModelCtrl.$render = function() {
					$element.val(ngModelCtrl.$viewValue);
				};

				//Si cambia el modelo, o los datos en la libreria, se le informa a angularJS que actualice ng-model
				$element.on('set', function(args) {
					$scope.$apply(function() {
						ngModelCtrl.$setViewValue($element.val());
					});
				});
			}
		};
	}]);