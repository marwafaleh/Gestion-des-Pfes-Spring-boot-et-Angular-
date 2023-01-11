import { GestionService } from './gestion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typesPfe: any = [];
  pfes: any = [];
  currentType: any = 'tous';
  nbrAll: number = 0;
  constructor(private pfeService: GestionService) {
    this.pfeService.AllTypePfes().subscribe(d => this.typesPfe = d);
  }

  ngOnInit(): void {
    this.pfeService.AllTypePfes().subscribe(data => {
      console.log(data);
      this.typesPfe = data
    });
    this.loadPfes('tous');
    console.log("nbrelements");

    this.nbrAll = this.typesPfe.page.totalElements;
  }

  getPfesOf(type: any) {
    this.pfeService.AllPfesByType(type).subscribe(data => { console.log(this.pfes); this.pfes = data });
    this.currentType = type;
    this.loadPfes(this.currentType);
  }


  loadPfes(current: any) {
    if (current === 'tous') {
      this.pfeService.AllPfes().subscribe(d => this.pfes = d);
    } else {
      this.pfeService.AllPfesByType(current).subscribe(d => this.pfes = d);
    }
  }
  onModifier(pfe: any) {
    console.log();
  }
  onDelete(id: any) {
    confirm("êtes-vous sûr de vouloir supprimer?");
    //this.pfeService.deletePfe(id).subscribe(d => this.router.navigateByUrl('pfes'));
  }
}
