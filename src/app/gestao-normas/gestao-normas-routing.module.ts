import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNormasComponent } from './lista-normas/lista-normas.component';

const routes: Routes = [
  {
    path: 'lista-normas',
    component: ListaNormasComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestaoNormasRoutingModule { }