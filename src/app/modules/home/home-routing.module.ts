import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home1Component } from '../../pages/home/home1/home1.component';


const routes: Routes = [
  { path: '', component: Home1Component },
  { path: 'index', component: Home1Component },
  { path: 'index1', component: Home1Component },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
