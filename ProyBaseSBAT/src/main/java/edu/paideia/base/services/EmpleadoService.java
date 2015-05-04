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

}
