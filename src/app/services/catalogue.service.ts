import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host :  string="http://localhost:8080"

  constructor(private httpClient: HttpClient) { }
  public getRessurce(url){
    return this.httpClient.get(this.host+url);
  }

}
