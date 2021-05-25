import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';
import { HttpClient } from '@angular/common/http';
import {  SafeUrl} from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  lista: any = null;
  prod: any = {
    id: null,
    nombre: null,
    precio: null,
    imagen: null,
    imagenUrl: null,
  }
  constructor(private productosServicio: ProductosService) { }

  ngOnInit() {
    this.recuperarTodos();
  }

  onFileSelected(event:any){
    // console.log(event.target);
    
    this.prod.imagen = event.target.files[0];
  }
  recuperarTodos() {
    this.productosServicio.listar().subscribe(result => {
      console.log(result);
      
      this.lista = result;
    });
  }

  nuevo() {
    this.productosServicio.nuevo(this.prod).subscribe((result:any) => {
      if (result.insertId) {
        this.limpiar();
        this.recuperarTodos();
      }
    });
  }

  eliminar(id: any) {
    if (!confirm("Esta seguro que desea eliminar este registro?"))
      return;
    this.productosServicio.eliminar(id).subscribe(result => {
      if (result == "Ok") {
        this.recuperarTodos();
      }
    });
  }

  actualizar() {
    this.productosServicio.actualizar(this.prod).subscribe((result: any) => {
      console.log(result);
      
      if (result.affectedRows) {
        this.limpiar();
        this.recuperarTodos();
      }
    });
  }

  mostrar(id: any) {
    this.productosServicio.mostrar(id).subscribe((result: any) => {
      this.prod = result;
    });
  }

  hayRegistros() {
    return true;
  }
  limpiar() {
    this.prod = {
      id: null,
      nombre: null,
      precio: null,
      imagen: null
    };
  }
}

