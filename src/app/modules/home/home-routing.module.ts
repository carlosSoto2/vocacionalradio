import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home1Component } from '../../pages/home/home1/home1.component';
import { Home2Component } from '../../pages/home/home2/home2.component';
import { Home3Component } from '../../pages/home/home3/home3.component';
import { Home4Component } from '../../pages/home/home4/home4.component';
import { Home5Component } from '../../pages/home/home5/home5.component';

const routes: Routes = [
  { path: '', component: Home1Component },
  { path: 'index', component: Home1Component },
  { path: 'index1', component: Home1Component },
  { path: 'index2', component: Home2Component },
  { path: 'index3', component: Home3Component },
  { path: 'index4', component: Home4Component },
  { path: 'index5', component: Home5Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
