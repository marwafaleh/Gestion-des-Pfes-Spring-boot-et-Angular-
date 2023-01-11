package tn.essat.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Pfe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String titre;
	@ManyToOne
	private TypePfe typePfe;
	public String getTypeName() {
		return this.typePfe.getLibelle();
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public TypePfe getTypePfe() {
		return typePfe;
	}
	public void setTypePfe(TypePfe typePfe) {
		this.typePfe = typePfe;
	}
	public Pfe() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Pfe(String titre, TypePfe typePfe) {
		super();
		this.titre = titre;
		this.typePfe = typePfe;
	}
	
	
}
