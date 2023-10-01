import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageBlogGridComponent } from '../../pages/blog/page-blog-grid/page-blog-grid.component';
import { PageBlogListingComponent } from '../../pages/blog/page-blog-listing/page-blog-listing.component';
import { PageBlogMasonryComponent } from '../../pages/blog/page-blog-masonry/page-blog-masonry.component';
import { PageBlogSingleComponent } from '../../pages/blog/page-blog-single/page-blog-single.component';
import { PageBlogPostRightSidebarComponent } from '../../pages/blog/page-blog-post-right-sidebar/page-blog-post-right-sidebar.component';

const routes: Routes = [
  { path: '', component: PageBlogGridComponent },
  { path: 'blog-grid', component: PageBlogGridComponent },
  { path: 'blog-listing', component: PageBlogListingComponent },
  { path: 'blog-masonry', component: PageBlogMasonryComponent },
  { path: 'blog-single', component: PageBlogSingleComponent },
  { path: 'post-right-sidebar', component: PageBlogPostRightSidebarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
