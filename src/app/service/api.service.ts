import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseAnd:string= "http://192.168.2.253:8090/ananda/dormamu";

  constructor(private http:HttpClient) { }

  public buscarProductoStore(itemCode:any){
      return this.http.get(this.baseAnd+"/item-s/"+itemCode);
  }
  public buscarProductoMayoreo(itemCode:any){
    return this.http.get(this.baseAnd+"/item-m/"+itemCode);
  }
}
