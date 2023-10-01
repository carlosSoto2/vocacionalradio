import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageAbout1Component } from '../../pages/about/page-about1/page-about1.component';
// import { PageAbout2Component } from '../../pages/about/page-about2/page-about2.component';

const routes: Routes = [
  { path: '', component: PageAbout1Component },
  { path: 'nosotros', component: PageAbout1Component },
  // { path: 'about2', component: PageAbout2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
