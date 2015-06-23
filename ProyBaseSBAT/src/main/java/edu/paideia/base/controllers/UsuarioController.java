package edu.paideia.base.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.paideia.base.model.Usuario;
import edu.paideia.base.services.UsuarioService;


@RestController
public class UsuarioController {
	
	@Autowired
	private UsuarioService service;
	
	
	@RequestMapping(value="/session", method=RequestMethod.GET)
	public Boolean isAuthenticated(String usr)throws Exception{
		return service.isAuthenticated(usr);
	}
	
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public Boolean login(@RequestBody @Valid Usuario usuario)throws Exception{
		return service.login(usuario.getUsuario(), usuario.getClave());
	}
	
	@RequestMapping(value="/logout", method=RequestMethod.GET)
	public Boolean login(String usr)throws Exception{
		return service.logout(usr);
	}


}
