import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageHistoryComponent } from '../../pages/other/page-history/page-history.component';
import { PageFontIconsComponent } from '../../pages/other/page-font-icons/page-font-icons.component';
import { PageError404Component } from '../../pages/other/page-error404/page-error404.component';
import { PageFaqComponent } from '../../pages/other/page-faq/page-faq.component';
import { PageContactUsComponent } from '../../pages/other/page-contact-us/page-contact-us.component';

const routes: Routes = [
  { path: '', component: PageHistoryComponent },
  { path: 'our-history', component: PageHistoryComponent },
  { path: 'icon-font', component: PageFontIconsComponent },
  { path: 'error404', component: PageError404Component },
  { path: 'faq', component: PageFaqComponent },
  { path: 'contact1', component: PageContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
