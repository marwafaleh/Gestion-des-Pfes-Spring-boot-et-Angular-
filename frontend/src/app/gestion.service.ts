import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionService {
  urlServer: string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  /*getAllPfes() {
    return this.http.get(this.urlServer + '/type');
  }
  getPfes() {
    return this.http.get(this.urlServer + '/pfes');
  }


  savePfe(pfe: any) {
    console.log("pfe sent: " + JSON.stringify(pfe));
    return this.http.post<any>(this.urlServer + '/save', {titre: pfe.titre , type: { id: pfe.type }});
  }*/
  AllTypePfes(){
    return this.http.get(this.urlServer + '/typePfes');
  }
  AllPfes(){
    return this.http.get(this.urlServer + '/pfes');
  }

  AllPfesByType(type:any){
    return this.http.get(type._links.pfes.href);
  }
  deletePfe(id: any){
    return this.http.delete(this.urlServer+'/pfes/'+id);
  }
  addPfe(pfe: any){
    console.log("pfe received: " + pfe);
    return this.http.post(this.urlServer  + '/pfes',pfe);
  }
  getPfe(id: any){
    return this.http.get(this.urlServer+'/pfes/'+id);
  }
  updatePfe(pfe:any){
    return this.http.put(this.urlServer+'/pfes/'+pfe.id,pfe);
  }
}
