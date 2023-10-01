import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageProjectGrid3ColsComponent } from '../../pages/projects/grid/page-project-grid3-cols/page-project-grid3-cols.component';
import { PageProjectGrid3ColsNogutComponent } from '../../pages/projects/grid/page-project-grid3-cols-nogut/page-project-grid3-cols-nogut.component';
import { PageProjectGrid4ColsComponent } from '../../pages/projects/grid/page-project-grid4-cols/page-project-grid4-cols.component';
import { PageProjectGrid4ColsNogutComponent } from '../../pages/projects/grid/page-project-grid4-cols-nogut/page-project-grid4-cols-nogut.component';
import { PageProjectGrid5ColsComponent } from '../../pages/projects/grid/page-project-grid5-cols/page-project-grid5-cols.component';
import { PageProjectGrid5ColsNogutComponent } from '../../pages/projects/grid/page-project-grid5-cols-nogut/page-project-grid5-cols-nogut.component';
import { PageProjectMasonry3ColsComponent } from '../../pages/projects/masonry/page-project-masonry3-cols/page-project-masonry3-cols.component';
import { PageProjectMasonry3ColsNogutComponent } from '../../pages/projects/masonry/page-project-masonry3-cols-nogut/page-project-masonry3-cols-nogut.component';
import { PageProjectMasonry4ColsComponent } from '../../pages/projects/masonry/page-project-masonry4-cols/page-project-masonry4-cols.component';
import { PageProjectMasonry4ColsNogutComponent } from '../../pages/projects/masonry/page-project-masonry4-cols-nogut/page-project-masonry4-cols-nogut.component';
import { PageProjectMasonry5ColsComponent } from '../../pages/projects/masonry/page-project-masonry5-cols/page-project-masonry5-cols.component';
import { PageProjectMasonry5ColsNogutComponent } from '../../pages/projects/masonry/page-project-masonry5-cols-nogut/page-project-masonry5-cols-nogut.component';
import { PageProjectCarouselComponent } from '../../pages/projects/page-project-carousel/page-project-carousel.component';
import { PageProjectDetail1Component } from '../../pages/projects/detail/page-project-detail1/page-project-detail1.component';
import { PageProjectDetail2Component } from '../../pages/projects/detail/page-project-detail2/page-project-detail2.component';

const routes: Routes = [
  { path: '', component: PageProjectCarouselComponent },
  // { path: 'project-grid3-columns', component: PageProjectGrid3ColsComponent },
  // { path: 'project-grid3-columns-no-gap', component: PageProjectGrid3ColsNogutComponent },
  // { path: 'project-grid4-columns', component: PageProjectGrid4ColsComponent },
  // { path: 'project-grid4-columns-no-gap', component: PageProjectGrid4ColsNogutComponent },
  // { path: 'project-grid5-columns', component: PageProjectGrid5ColsComponent },
  // { path: 'project-grid5-columns-no-gap', component: PageProjectGrid5ColsNogutComponent },
  { path: 'noticias', component: PageProjectMasonry3ColsComponent },
  { path: 'vivo', component: PageProjectMasonry3ColsNogutComponent },
  // { path: 'project-masonry4-columns', component: PageProjectMasonry4ColsComponent },
  // { path: 'project-masonry4-columns-no-gap', component: PageProjectMasonry4ColsNogutComponent },
  // { path: 'project-masonry5-columns', component: PageProjectMasonry5ColsComponent },
  // { path: 'project-masonry5-columns-no-gap', component: PageProjectMasonry5ColsNogutComponent },
  // { path: 'project-carousel', component: PageProjectCarouselComponent },
  // { path: 'project-detail1', component: PageProjectDetail1Component },
  // { path: 'project-detail2', component: PageProjectDetail2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
