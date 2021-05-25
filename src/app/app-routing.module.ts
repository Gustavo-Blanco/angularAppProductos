import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: 'productos',
  component: ProductosComponent
  },
  {
    path:'acercade',
    component: AcercadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
