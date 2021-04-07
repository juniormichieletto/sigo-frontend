import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNormasComponent } from './gestao-normas/lista-normas/lista-normas.component';
  
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'page-not-found', component: PageNotFoundComponent },
  // { path: 'unauthorized-page', component: UnauthorizedPageComponent},
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
