angular.module('TpChartModule')
.factory('googleChartLoaderPromise', ['$q', '$rootScope', '$window', function($q, $rootScope, $window) {
	//Se trata del llamado al servicio de google chart.
	// Create a Deferred Object: Simplemente es una instancia de un request asincrono.
	var deferred = $q.defer();
	// Load Google Charts API asynchronously
	$window.google.load('visualization', '1',
		{
			packages: ['corechart'],
			callback: function() {
				// When loaded, trigger the resolve,
				// but inside an $apply as the event happens
				// outside of AngularJS life cycle
				$rootScope.$apply(function() {
					deferred.resolve();
				});
			}
		}
	);
	// Return the promise object for the directive
	// to chain onto.
	return deferred.promise;
}]);