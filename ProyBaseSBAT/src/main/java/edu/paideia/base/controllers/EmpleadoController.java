package edu.paideia.base.controllers;

import java.util.Collection;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@RequestMapping(value="/empleados", method=RequestMethod.POST)
	public boolean saveEmpleado(@RequestBody @Valid Empleado empleado){
		System.out.println(empleado+" Con fecha de creación");
		return service.save(empleado);
	}
	
	@RequestMapping(value="/empleados", method=RequestMethod.PUT)
	public boolean updateEmpleado(Empleado empleado){
		return service.update(empleado);
	}

	
	@RequestMapping(value="/empleados", method=RequestMethod.DELETE)
	public boolean removeEmpleado(Long id){
		return service.remove(id);
	}
	
	@RequestMapping(value="/empleados/find", method=RequestMethod.GET)
	public Empleado findEmpleado(String nombre){
		return service.find(nombre);
	}




}
