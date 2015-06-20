package edu.paideia.base.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;




@Entity
@Table(name = "empleado")
public class Empleado {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String nombre;
	private String numId;
	private Double salario;
	private String cargo;
	private Date fechaCreacion;
	
	public Empleado(){
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getNumId() {
		return numId;
	}

	public void setNumId(String numId) {
		this.numId = numId;
	}

	public Double getSalario() {
		return salario;
	}

	public void setSalario(Double salario) {
		this.salario = salario;
	}

	public String getCargo() {
		return cargo;
	}

	public void setCargo(String cargo) {
		this.cargo = cargo;
	}
	
	public String toString(){
		return id+" - "+nombre+" - "+numId+" - "+salario+" - "+cargo;
	}

	public boolean equals(Object obj){
		if(obj instanceof Empleado){
			Empleado e = (Empleado) obj;
			if(e.getId() == null && this.getId() == null){
				return true;
			}
			return this.getId().equals(e.getId());
		}
		return false;
	}
	
	public int hashCode(){
		return this.getId().hashCode();
	}

	public Date getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

}
