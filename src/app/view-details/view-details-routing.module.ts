import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailsComponent } from './view-details.component';

const routes: Routes = [
 { 
  path: '',
  component: ViewDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewDetailsRoutingModule { }
