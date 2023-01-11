import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  typesPfe: any = [];
  currentType: any = 'tous';
  constructor(private pfeService: GestionService) {
    this.pfeService.AllTypePfes().subscribe(d => this.typesPfe = d);
  }

  ngOnInit(): void {
    this.pfeService.AllTypePfes().subscribe(data => {
      console.log(data);
      this.typesPfe = data
    });
    //this.loadPfes('tous');
    //console.log("nbrelements");

    //this.nbrAll = this.typesPfe.page.totalElements;
  }
  onChange(type:any){
    this.currentType = type.libelle;
  }

}
