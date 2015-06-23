package edu.paideia.base.services;

import java.util.Collection;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.paideia.base.model.Usuario;
import edu.paideia.base.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository repository;
	
	
	public Boolean login(String usr, String pwd)throws Exception{
		Usuario usuario = getRepository().findByUsuario(usr).iterator().next();
		if(usuario == null || !usuario.getClave().equals(pwd)){
			throw new Exception("Invalid Credentials");
		}
		usuario.setAutenticado(true);
		getRepository().save(usuario);
		return true;
	}
	
	public Boolean logout(String usr)throws Exception{
		System.out.println("Logout Usuario: "+usr);
		Collection<Usuario> usrs = getRepository().findByUsuario(usr);
		Iterator<Usuario> iter = usrs.iterator();
		if(usrs == null || !iter.hasNext()){
			throw new Exception(usr+" is not authenticated");
		}
		Usuario usuario = iter.next();
		if(usuario==null || !usuario.getAutenticado()){
			throw new Exception(usr+" is not authenticated");
		}
		usuario.setAutenticado(false);
		getRepository().save(usuario);
		return true;
	}
	
	
	public Boolean isAuthenticated(String usr)throws Exception{
		usr = usr==null?"":usr;
		Collection<Usuario> usrs = getRepository().findByUsuario(usr);
		Iterator<Usuario> iter = usrs.iterator();
		if(usrs == null || !iter.hasNext()){
			throw new Exception(usr+" is not authenticated");
		}
		Usuario usuario = iter.next();
		if(usuario==null || !usuario.getAutenticado()){
			throw new Exception(usr+" is not authenticated");
		}
		return true;
	}

	
	
	public UsuarioRepository getRepository() {
		return repository;
	}

	public void setRepository(UsuarioRepository repository) {
		this.repository = repository;
	}

	
}
