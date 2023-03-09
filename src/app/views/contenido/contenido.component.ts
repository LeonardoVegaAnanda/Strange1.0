import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit{

  almacen:any='';
  itemCode:any;
  itemData:any={
    itemCode:'',
    itemName:'',
    CodeBars:'',
    SWeight1:'',
    ItmsGrpCod:'',
    U_codigo:'',
    ubicaciones:[]
  };
  cadenaImg?:string;

  panel:boolean=false;


  ngOnInit(): void {
  }
  constructor(private api:ApiService,private modal:NgbModal){}

  open(item:any){
    this.modal.open(item)
  }
  buscarUbicaciones(){
      this.api.buscarProducto(this.itemCode).subscribe(
        (data) =>{
          console.log(data);
          Swal.fire("Producto","Exito al Traer el producto del almacen de store","success");
          this.itemData = data;
          this.cadenaImg =  "http://104.36.166.251:5757/fotos_productos/"+this.itemCode+".jpg";
          this.panel=true;
          this.modal.dismissAll();
        },
        (error) =>{
          console.log(error);
        }
      );
    }
     }

