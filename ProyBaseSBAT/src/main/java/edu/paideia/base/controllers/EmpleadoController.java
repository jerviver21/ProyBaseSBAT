package edu.paideia.base.controllers;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.paideia.base.model.Empleado;
import edu.paideia.base.services.EmpleadoService;

@RestController
public class EmpleadoController {
	
	@Autowired
	private EmpleadoService service;
	
	@RequestMapping(value="/empleados", method=RequestMethod.GET)
	public Collection<Empleado> getEmpleados(){
		return service.findAll();
	}

}
