import { GestionService } from './../gestion.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-pfe',
  templateUrl: './modifier-pfe.component.html',
  styleUrls: ['./modifier-pfe.component.css']
})
export class ModifierPfeComponent implements OnInit {
  pfe: any;
  constructor(private route:ActivatedRoute,private router: Router, private pfeService: GestionService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') || 0;

    this.pfeService.getPfe(id).subscribe(d => this.pfe = d);
  }
  ngAfterViewInit() {
    console.log(JSON.stringify(this.pfe));
  }
  onUpdate(){
    this.pfeService.updatePfe(this.pfe).subscribe(d => console.log("updated"));
    this.router.navigateByUrl('');
  }
}
