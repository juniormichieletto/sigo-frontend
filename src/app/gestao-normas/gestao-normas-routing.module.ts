import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormaComponent } from '../core/norma/norma.component';
import { ListaNormasComponent } from './lista-normas/lista-normas.component';

const routes: Routes = [
  {
    path: 'lista-normas',
    component: ListaNormasComponent
 },
 {
   path: 'norma',
   component: NormaComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestaoNormasRoutingModule { }
