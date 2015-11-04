angular.module("AdvTranscludeModule")
	.directive("candidateRepeat", [function() {
		return {
			
			restrict: "A",
			transclude: "element",
			link: function($scope, $element, $attrs, ctrl, $transclude) {
				//$scope: Es el alcance de la directiva
				//$element: El elemento en donde la directiva se encuentra presente
				//$attr: Los atributos del elemento
				//ctrl: Se puede pasar como parametro el controlador
				//$transclude: Es la funcion transclusion: esta función es un constructor que nos permite sacar copias del contenido que se quiere transcluir o lo que esta dentro del tag con la directiva
				
				//El atributo candidateRepeat del elemento, tiene el array de jsons, con eval lo instanciamos
				var data = $scope.$eval($attrs.candidateRepeat);
				
				var container = angular.element("<div></div>");
				
				for(var i = 0; i < data.length; i++){
					//La siguiente instancia toma el código a ser transcluido, el contenido en el elemento, para crear el numero de instancias necesarias.
					var instance = $transclude($scope.$new(), 
							function (cloneElement, newScope) {
								newScope.c = data[i];
								newScope.percentage = (newScope.c.value * 100)+" %";
							}
					);
					//Se adiciona al contenedor
					container.append(instance);
					
				}
				
				//El contenido creado se adiciona después del elemento.
				$element.after(container);
			}
		};
	}]);