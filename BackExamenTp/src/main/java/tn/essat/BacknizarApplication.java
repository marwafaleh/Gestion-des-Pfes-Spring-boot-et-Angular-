package tn.essat;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import tn.essat.dao.IPfe;
import tn.essat.dao.ITypePfe;
import tn.essat.model.Pfe;
import tn.essat.model.TypePfe;

@SpringBootApplication
public class BacknizarApplication /*implements CommandLineRunner*/{
	@Autowired
	private IPfe pfeRepo;
	@Autowired
	private ITypePfe typeRepo;
	public static void main(String[] args) {
		SpringApplication.run(BacknizarApplication.class, args);
	}

	/*@Override
	public void run(String... args) throws Exception {
		for(int i = 0; i <= 3; i++) {
			TypePfe tp = new TypePfe();
			tp.setLibelle("Type "+(i+1));
			typeRepo.save(tp);
		}
		
		typeRepo.findAll().forEach(t -> {
			for (int i = 0; i < 1 + (new Random().nextInt() * 5); i++) {
				Pfe p = new Pfe();
				p.setTitre("Pfe "+(i+1));
				p.setTypePfe(t);
				pfeRepo.save(p);
			}
		});
		
	}*/

}
