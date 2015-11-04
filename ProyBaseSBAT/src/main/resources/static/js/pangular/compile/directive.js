angular.module("dynamicFormApp")
.directive('formElement', [function() {
	return {
		restrict: 'E',
		require: '^form',
		scope: true,
		compile: function($element, $attrs) {
			//Es un nuevo elemento, defino las validaciones que tendrá
			var expectedInputAttrs = {
										'required': 'required',
										'ng-minlength': 'ngMinlength',
										'ng-pattern': 'ngPattern'
									 };
			
			// Busco los elementos de tipo validación que contenga el elemento.
			var validationKeys = $element.find('validation');
			var presentValidationKeys = {};
			var inputName = $attrs.name;
			
			//Se recorren las validaciones, y se llenan las que se encuentren presentes
			angular.forEach(validationKeys, function(validationKey) {
				validationKey = angular.element(validationKey);
				presentValidationKeys[validationKey.attr('key')] = validationKey.text();
			});
			
			//Se escribe el código que tendrá el elemento
			var elementHtml = 	'<div>' +
								'<label>' + $attrs.label + '</label>';
				elementHtml += 	'<input type="' + $attrs.type +
								'" name="' + inputName +
								'"ng-model="' + $attrs.bindTo + '"';
				
			$element.removeAttr('type');
			$element.removeAttr('name');
			
			//Busca que elementos de validación están presentes en form-element.
			for (var i in expectedInputAttrs) {
				if ($attrs[expectedInputAttrs[i]] !== undefined) {
						elementHtml += ' ' + i + '="' +$attrs[expectedInputAttrs[i]] + '"';
				}
				$element.removeAttr(i);
			}
			
			
			elementHtml += '>';
			
			//Considere que validators se encuentra en la función link, que es la que se retorna al final
			elementHtml += 	'<span ng-repeat="(key, text) in validators" ' +
											' ng-show="hasError(key)"' +
											' ng-bind="text"></span>';
			elementHtml += 	'</div>';
			
			
			$element.html(elementHtml);
			
			//En el compile se define la función link
			return function($scope, $element, $attrs, formCtrl) {
				$scope.validators = angular.copy(presentValidationKeys);
				$scope.hasError = function(key) {
						return !!formCtrl[inputName]['$error'][key];
				};
			};
		}
	};
}]);