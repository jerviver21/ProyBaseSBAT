package edu.paideia.base.services;


import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import edu.paideia.base.model.Empleado;
import edu.paideia.base.repository.EmpleadoRepository;

@RunWith(MockitoJUnitRunner.class) 
public class EmpleadoServiceTest {
	
	
	EmpleadoRepository repository;
	
	
	
	
	@Before
	public void setUp()throws Exception{
		repository = mock(EmpleadoRepository.class);
		//Iniciamos los objetos que  mocks
		List<Empleado> empleados = new ArrayList<Empleado>();
		Empleado e1 = new Empleado();
		e1.setNombre("Jerson Viveros Aguirre");
		e1.setCargo("Ingeniero de Proyectos");
		e1.setNumId("16942249");
		e1.setSalario(3200000.0);
		
		Empleado e1_1 = new Empleado();
		e1_1.setNombre("Jerson Viveros Aguirre");
		e1_1.setId(1l);
		e1_1.setCargo("Ingeniero de Proyectos");
		e1_1.setNumId("16942249");
		e1_1.setSalario(3200000.0);
		
		Empleado e2 = new Empleado();
		e2.setNombre("Maria Fernanda Peña");
		e2.setId(2l);
		e2.setCargo("Gerente General");
		e2.setNumId("56233456");
		e2.setSalario(8200000.0);
		
		empleados.add(e1_1);
		empleados.add(e2);
		
		List<Empleado> empleadosByName = new ArrayList<Empleado>();
		empleadosByName.add(e2);
		
		when(repository.findAll()).thenReturn(empleados); 
		//when(repository.save(new Empleado())).thenThrow(new Exception("Sin parametros obligatorios"));
		when(repository.save(e1)).thenReturn(e1_1);
		when(repository.findByNombre("Maria Fernanda Peña")).thenReturn(empleadosByName);
		
	}

	@Test
	public void testFindAll() {
		
		EmpleadoService service = new EmpleadoService();
		service.setRepository(repository);
		System.out.println("Esto XXX:"+ service.getRepository().findAll());
		System.out.println("Esto YYY:"+ service.findAll());
		List<Empleado> empleados = new ArrayList<Empleado>();
		for(Empleado e:service.findAll()){
			empleados.add(e);
		}
		//empleados.addAll(service.findAll());

		assertTrue("No retorna el valor esperado", service.findAll().size() == 2);
		
		Empleado e1 = new Empleado();
		e1.setNombre("Jerson Viveros Aguirre");
		e1.setId(1l);
		e1.setCargo("Ingeniero de Proyectos");
		e1.setNumId("16942249");
		e1.setSalario(3200000.0);
		assertTrue(empleados.get(0).equals(e1));
		
		Empleado e2 = new Empleado();
		e2.setNombre("Maria Fernanda Peña");
		e2.setId(2l);
		e2.setCargo("Gerente General");
		e2.setNumId("56233456");
		e2.setSalario(8200000.0);
		assertTrue(empleados.get(1).equals(e2));
		
	}

	
	@Test
	public void testSave() {
		EmpleadoService service = new EmpleadoService();
		service.setRepository(repository);
		
		Empleado e1 = new Empleado();
		e1.setNombre("Jerson Viveros Aguirre");
		e1.setCargo("Ingeniero de Proyectos");
		e1.setNumId("16942249");
		e1.setSalario(3200000.0);
		assertTrue(service.save(e1));	
		verify(repository).save(e1);
	}


	@Test
	public void testRemove() {
		EmpleadoService service = new EmpleadoService();
		service.setRepository(repository);
		service.remove(1l);
		verify(repository).delete(1l);
	}

	@Test
	public void testFind() {
		EmpleadoService service = new EmpleadoService();
		service.setRepository(repository);
		
		Empleado e2 = new Empleado();
		e2.setNombre("Maria Fernanda Peña");
		e2.setId(2l);
		e2.setCargo("Gerente General");
		e2.setNumId("56233456");
		e2.setSalario(8200000.0);
		
		assertTrue(service.find("Maria Fernanda Peña").equals(e2));
	}

}
