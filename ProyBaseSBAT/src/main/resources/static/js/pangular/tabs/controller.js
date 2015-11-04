angular.module("TabsModule")
	.controller("TController", [function() {
		var self = this;
		
		self.presentation = "IPSOS NAPOLEON FRANCO";
		
		self.candidates = [
		    {name:"Maurice Armitage", value:0.29, logo:"+++"},
		    {name:"Roberto Ortiz", value:0.20, logo:"---"},
		    {name:"Angelino Garzón", value:0.17, logo:":'("}
		];
		
		
	}]);