package edu.paideia.base.repository;

import java.util.Collection;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import edu.paideia.base.model.Empleado;



@Repository
public interface EmpleadoRepository extends CrudRepository<Empleado, Long>{
	

}
