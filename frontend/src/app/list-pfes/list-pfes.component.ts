import { Router } from '@angular/router';
import { GestionService } from './../gestion.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-pfes',
  templateUrl: './list-pfes.component.html',
  styleUrls: ['./list-pfes.component.css']
})
export class ListPfesComponent implements OnInit {
  @Input()pfes: any = [];
  constructor(private pfeService: GestionService, private router: Router) { }

  ngOnInit(): void {
    this.pfeService.AllPfes().subscribe(d => this.pfes = d);
  }
  onDelete(id: any) {
    confirm("êtes-vous sûr de vouloir supprimer?");
    this.pfeService.deletePfe(id).subscribe(d => this.router.navigateByUrl('pfes'));
  }

}
