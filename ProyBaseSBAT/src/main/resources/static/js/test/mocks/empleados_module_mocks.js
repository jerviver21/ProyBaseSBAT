angular.module('EmpleadosModuleMocks', [])
	.factory('EmpleadosService', [function() {
		return {
			consultarTodos: function() {
				return [
				    {"id":8,"nombre":"Jerson Viveros","numId":"16942248","salario":4500000.0,"cargo":"Ingeniero de Desarrollo"},
				    {"id":19,"nombre":"Yaneth Giraldo","numId":"15478955","salario":6000000.0,"cargo":"Independiente"}
				];
			}
	};
}]);