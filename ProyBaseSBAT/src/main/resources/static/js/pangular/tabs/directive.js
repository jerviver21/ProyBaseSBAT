angular.module("TabsModule")
	.directive("tabs", [function() {
		return {
			restrict: "E",
			transclude: true,
			scope:true,
			//tabs, es una variable del controlador y definida en el scope de la directiva
			//de igual forma las funciones selectTab y isSelectedTab son definidas en el scope de la directiva
			//razón por la cual son accesibles en el template... Aqui se pitaran uno debajo del otro o uno al
			//lado del otro los titulos de los tabs para que el usuario los seleccione.
			//Al dar click sobre estos divs va a alterar el estado del controlador que se cominucan a los hijos
			// (tab) para que redenricen el contenido de acuerdo al estado.
			template: 	"<di>" +
						"	<div 	ng-repeat='tab in tabs' " +
						"			ng-click='selectTab($index)' " +
						"			ng-class='{selected:isSelectedTab($index)}' > " +
						"		<span ng-bind=' tab.title'></span>" +
						"	</div>" +
						"</div>" +
						"<div ng-transclude></div>",//El contenido transcluido, el contenido de cada tab
			controller: function ($scope) {
				var currentIndex = 0;
				$scope.tabs = [];
				//Esta función por no estar en el scope, no se puede ver desde el template
				this.registerTab = function (title, scope) {
					if($scope.tabs.length == 0){
						scope.selected = true;
					}else{
						scope.selected = false;
					}
					
					$scope.tabs.push({title: title, scope: scope});
				};
				
				$scope.selectTab = function(index){
					currentIndex = index;
					for(var i=0; i < $scope.tabs.length; i++){
						$scope.tabs[i].scope.selected = currentIndex === i;
					}
				};
				
				$scope.isSelectedTab = function(index){
					return currentIndex ===  index;
				};
				
			}
			
			
		};
	}])
	.directive("tab", [function(){
		return {
			restrict: "E",
			transclude: true,
			template: "<div ng-show='selected' ng-transclude></div>",
			//Indica que debe obligatoriamente estar dentro de tabs.
			require: '^tabs',
			scope: true,
			//En efecto este método se ejecuta después de la compilación, que hace usa el controlador del padre
			//y registra el tab dentro de tabs.
			link: function($scope, $element, $attr, tabCtrl){
				tabCtrl.registerTab($attr.title, $scope);
				
			}
		};
	}]);