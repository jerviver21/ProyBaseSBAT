package edu.paideia.base.repository;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.paideia.base.model.Empleado;
import edu.paideia.base.model.Usuario;

@Repository
public interface UsuarioRepository  extends CrudRepository<Usuario, Long>{
	
	public Collection<Usuario> findByUsuario(String usuario);


}
