angular.module("TranscludeModule")
	.directive("candidateData", [function() {
		return {
			templateUrl: "../js/pangular/transclusion/candidate.html",
			restrict: "A",
			transclude: true,
			scope: {
				candidate: "="
			},
			link: function($scope, $element, $attrs) {
				$scope.getPercentage = function(cand){
					return	(cand.value*100)+" %";
				};
			}
		};
	}]);