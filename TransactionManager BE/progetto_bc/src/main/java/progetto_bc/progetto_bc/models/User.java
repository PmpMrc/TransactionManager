package progetto_bc.progetto_bc.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "T_USER")
public class User {
	
	@Id
	@SequenceGenerator(name = "userSequence", sequenceName = "S_USER", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userSequence")
	@Column(name = "ID")
	private long id;

	@Column(name = "NAME")
	private String name;
	
	@Column(name = "SURNAME")
	private String surname;

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}
	
}
