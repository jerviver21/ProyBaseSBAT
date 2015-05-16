package edu.paideia.base.services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;

import edu.paideia.base.model.Empleado;
import edu.paideia.base.repository.EmpleadoRepository;


@Service
public class EmpleadoService {
	
	@Autowired
	EmpleadoRepository repository;
	
	public Collection<Empleado> findAll(){
		return Lists.newArrayList(repository.findAll());
	}

	public boolean save(Empleado empleado) {
		repository.save(empleado);
		return true;
	}

	public boolean update(Empleado empleado) {
		repository.save(empleado);
		return true;
	}

	public boolean remove(Long id) {
		repository.delete(id);
		return true;
	}

	public Empleado find(String nombre) {
		// TODO Auto-generated method stub
		return repository.findByNombre(nombre).iterator().next();
	}

}
