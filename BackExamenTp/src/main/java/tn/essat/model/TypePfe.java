package tn.essat.model;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class TypePfe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String libelle;
	@OneToMany(mappedBy = "typePfe")
	private Collection<Pfe> pfes;
	public Collection<Pfe> getPfes() {
		return pfes;
	}
	public void setPfes(Collection<Pfe> pfes) {
		this.pfes = pfes;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	public TypePfe(String libelle) {
		super();
		this.libelle = libelle;
	}
	public int getNbrPfes() {
		return this.pfes.size();
	}
	public TypePfe() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
