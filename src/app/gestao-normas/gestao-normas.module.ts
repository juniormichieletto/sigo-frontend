import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestaoNormasRoutingModule } from './gestao-normas-routing.module';
import { ListaNormasComponent } from './lista-normas/lista-normas.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListaNormasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GestaoNormasRoutingModule
  ]
})
export class GestaoNormasModule { }
