import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url='http://localhost:3000/productos/';
  constructor(private http: HttpClient) { }
  listar(){
    return this.http.get(`${this.url}listar`);
  }
  nuevo(producto:any) {
    const fd = new FormData();
    fd.append('nombre', producto.nombre);
    fd.append('precio', producto.precio);
    fd.append('imagen', producto.imagen,producto.imagen.name.replace(/\s/g, "_"));
    return this.http.post(`${this.url}`, fd);
  }
  eliminar(codigo:any) {
    // console.log(codigo);
    
    return this.http.delete(`${this.url}${codigo}`);
  }
  mostrar(codigo:any) {
    return this.http.get(`${this.url}mostrar/${codigo}`);
  }
  actualizar(producto:any) {
    console.log(producto);
    
    const fd = new FormData();
    fd.append('id',producto.id);
    fd.append('nombre', producto.nombre);
    fd.append('precio', producto.precio);
    if (producto.imagen != null) {
      fd.append('imagen', producto.imagen,producto.imagen.name.replace(/\s/g, "_"));
    }
    return this.http.put(`${this.url}`, fd);    
  }
}
