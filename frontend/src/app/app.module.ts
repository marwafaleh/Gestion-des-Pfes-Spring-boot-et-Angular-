import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PfesComponent } from './pfes/pfes.component';
import { AjouterPfeComponent } from './ajouter-pfe/ajouter-pfe.component';
import { ModifierPfeComponent } from './modifier-pfe/modifier-pfe.component';
import { ListPfesComponent } from './list-pfes/list-pfes.component';
import { MenuComponent } from './menu/menu.component'
@NgModule({
  declarations: [
    AppComponent,
    PfesComponent,
    AjouterPfeComponent,
    ModifierPfeComponent,
    ListPfesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
