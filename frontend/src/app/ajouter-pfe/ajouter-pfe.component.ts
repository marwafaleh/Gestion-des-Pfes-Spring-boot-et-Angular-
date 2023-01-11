import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-pfe',
  templateUrl: './ajouter-pfe.component.html',
  styleUrls: ['./ajouter-pfe.component.css']
})
export class AjouterPfeComponent implements OnInit {
  typePfes: any;
  nvPfe: any = {
    titre: '',
    typePfe: ''
  };
  constructor(private gestionPfe: GestionService, private router: Router) { }

  ngOnInit(): void {
    this.gestionPfe.AllTypePfes().subscribe(d => {
      console.log("types: " + d);
      this.typePfes = d
    });
  }
  onSubmit() {
    this.gestionPfe.addPfe(this.nvPfe).subscribe(d => this.router.navigate(['']))
  }

}
