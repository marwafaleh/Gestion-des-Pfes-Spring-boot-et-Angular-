import { ListPfesComponent } from './list-pfes/list-pfes.component';
import { ModifierPfeComponent } from './modifier-pfe/modifier-pfe.component';
import { AjouterPfeComponent } from './ajouter-pfe/ajouter-pfe.component';
import { PfesComponent } from './pfes/pfes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',component: ListPfesComponent },
  { path: 'ajouter', component: AjouterPfeComponent },
  { path: 'modifier/:id', component: ModifierPfeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
