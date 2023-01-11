package tn.essat.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import tn.essat.model.Pfe;
@RepositoryRestResource
@CrossOrigin("*")
public interface IPfe extends JpaRepository<Pfe, Long>{

}
