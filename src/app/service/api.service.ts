import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseAnd:string= "http://localhost:8090/ananda/dormamu/";

  constructor(private http:HttpClient) { }

  public buscarProducto(itemCode:any){
      return this.http.get(this.baseAnd+"ubicacion/"+itemCode);
  }
}
