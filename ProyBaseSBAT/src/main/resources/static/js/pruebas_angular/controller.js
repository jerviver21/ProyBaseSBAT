angular.module('PCtrlMod')
	.controller('PCtrl', [function() {
		var self = this;
		self.emps = [
		             {nombre: "Jerson Viveros", numId:"16942249", cargo:"Programador", salario:"3200000", fechaCreacion:"1982-01-31"},
		             {nombre: "Yaneth Giraldo", numId:"35426879", cargo:"Bailarina", salario:"5000000", fechaCreacion:"1980-08-23"}
		];
		
		
	}]);