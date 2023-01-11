import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pfes',
  templateUrl: './pfes.component.html',
  styleUrls: ['./pfes.component.css']
})
export class PfesComponent implements OnInit {
  typesPfe: any = [] ;
  constructor(private pfeService:GestionService) { console.log("inside");
  }

  ngOnInit(): void {
    this.pfeService.AllTypePfes().subscribe(data => { console.log(data);
     this.typesPfe = data });
  }

}
