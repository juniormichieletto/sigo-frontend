import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { GestaoNormasRoutingModule } from './gestao-normas-routing.module';
import { ListaNormasComponent } from './lista-normas/lista-normas.component';
import { NormaComponent } from './norma/norma.component';


@NgModule({
  declarations: [
    ListaNormasComponent,
    NormaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,

    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,

    GestaoNormasRoutingModule
  ]
})
export class GestaoNormasModule { }
