import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Services1Component } from '../../pages/services/services1/services1.component';
// import { Services2Component } from '../../pages/services/services2/services2.component';
// import { ServiceDetailComponent } from '../../pages/services/service-detail/service-detail.component';

const routes: Routes = [
  { path: '', component: Services1Component },
  { path: 'programacion', component: Services1Component },
  // { path: 'services2', component: Services2Component },
  // { path: 'services-detail', component: ServiceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
