package edu.paideia.base.services;

import java.util.Collection;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import edu.paideia.base.model.Empleado;
import edu.paideia.base.repository.EmpleadoRepository;


@Service
public class EmpleadoService {
	
	@Autowired
	private EmpleadoRepository repository;
	
	public Collection<Empleado> findAll(){
		return Lists.newArrayList(getRepository().findAll());
	}

	public boolean save(Empleado empleado) {
		System.out.println("Se guarda la fecha de creación");
		empleado.setFechaCreacion(new Date());
		getRepository().save(empleado);
		return true;
	}

	public boolean update(Empleado empleado) {
		getRepository().save(empleado);
		return true;
	}

	public boolean remove(Long id) {
		getRepository().delete(id);
		return true;
	}

	public Empleado find(String nombre) {
		// TODO Auto-generated method stub
		return getRepository().findByNombre(nombre).iterator().next();
	}

	
	public EmpleadoRepository getRepository() {
		return repository;
	}

	public void setRepository(EmpleadoRepository repository) {
		this.repository = repository;
	}

}
