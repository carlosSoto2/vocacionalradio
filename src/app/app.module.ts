import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './pages/home/home1/home1.component';

import { LoaderDirective } from './directives/loader.directive';
import { LoaderComponent } from './elements/loader/loader.component';
import { Footer1Component } from './sections/footer/footer1/footer1.component';
import { Header1Component } from './sections/header/header1/header1.component';
import { Footer2Component } from './sections/footer/footer2/footer2.component';
import { Header2Component } from './sections/header/header2/header2.component';
import { Header3Component } from './sections/header/header3/header3.component';
import { Header4Component } from './sections/header/header4/header4.component';
import { Header5Component } from './sections/header/header5/header5.component';
import { PageAbout1Component } from './pages/about/page-about1/page-about1.component';
import { PageAbout2Component } from './pages/about/page-about2/page-about2.component';
import { Services1Component } from './pages/services/services1/services1.component';
import { Services2Component } from './pages/services/services2/services2.component';
import { ServiceDetailComponent } from './pages/services/service-detail/service-detail.component';
import { PageTeam1Component } from './pages/team/page-team1/page-team1.component';
import { PageTeam2Component } from './pages/team/page-team2/page-team2.component';
import { PageTeamDetailComponent } from './pages/team/page-team-detail/page-team-detail.component';
import { PageProjectGrid3ColsComponent } from './pages/projects/grid/page-project-grid3-cols/page-project-grid3-cols.component';
import { PageProjectGrid3ColsNogutComponent } from './pages/projects/grid/page-project-grid3-cols-nogut/page-project-grid3-cols-nogut.component';
import { PageProjectGrid4ColsComponent } from './pages/projects/grid/page-project-grid4-cols/page-project-grid4-cols.component';
import { PageProjectGrid4ColsNogutComponent } from './pages/projects/grid/page-project-grid4-cols-nogut/page-project-grid4-cols-nogut.component';
import { PageProjectGrid5ColsComponent } from './pages/projects/grid/page-project-grid5-cols/page-project-grid5-cols.component';
import { PageProjectGrid5ColsNogutComponent } from './pages/projects/grid/page-project-grid5-cols-nogut/page-project-grid5-cols-nogut.component';
import { PageProjectMasonry3ColsComponent } from './pages/projects/masonry/page-project-masonry3-cols/page-project-masonry3-cols.component';
import { PageProjectMasonry3ColsNogutComponent } from './pages/projects/masonry/page-project-masonry3-cols-nogut/page-project-masonry3-cols-nogut.component';
import { PageProjectMasonry4ColsComponent } from './pages/projects/masonry/page-project-masonry4-cols/page-project-masonry4-cols.component';
import { PageProjectMasonry4ColsNogutComponent } from './pages/projects/masonry/page-project-masonry4-cols-nogut/page-project-masonry4-cols-nogut.component';
import { PageProjectMasonry5ColsComponent } from './pages/projects/masonry/page-project-masonry5-cols/page-project-masonry5-cols.component';
import { PageProjectMasonry5ColsNogutComponent } from './pages/projects/masonry/page-project-masonry5-cols-nogut/page-project-masonry5-cols-nogut.component';
import { PageProjectCarouselComponent } from './pages/projects/page-project-carousel/page-project-carousel.component';
import { PageProjectDetail1Component } from './pages/projects/detail/page-project-detail1/page-project-detail1.component';
import { PageProjectDetail2Component } from './pages/projects/detail/page-project-detail2/page-project-detail2.component';
import { PageBlogGridComponent } from './pages/blog/page-blog-grid/page-blog-grid.component';
import { PageBlogListingComponent } from './pages/blog/page-blog-listing/page-blog-listing.component';
import { PageBlogMasonryComponent } from './pages/blog/page-blog-masonry/page-blog-masonry.component';
import { PageBlogSingleComponent } from './pages/blog/page-blog-single/page-blog-single.component';
import { PageBlogPostRightSidebarComponent } from './pages/blog/page-blog-post-right-sidebar/page-blog-post-right-sidebar.component';
import { PageShopGridComponent } from './pages/shop/page-shop-grid/page-shop-grid.component';
import { PageShopListComponent } from './pages/shop/page-shop-list/page-shop-list.component';
import { PageShopDetailComponent } from './pages/shop/page-shop-detail/page-shop-detail.component';
import { PageShopAccountComponent } from './pages/shop/page-shop-account/page-shop-account.component';
import { PageShopCartComponent } from './pages/shop/page-shop-cart/page-shop-cart.component';
import { PageShopCheckoutComponent } from './pages/shop/page-shop-checkout/page-shop-checkout.component';
import { PageHistoryComponent } from './pages/other/page-history/page-history.component';
import { PageFontIconsComponent } from './pages/other/page-font-icons/page-font-icons.component';
import { PageError404Component } from './pages/other/page-error404/page-error404.component';
import { PageFaqComponent } from './pages/other/page-faq/page-faq.component';
import { PageContactUsComponent } from './pages/other/page-contact-us/page-contact-us.component';
import { SectionSlider1Component } from './sections/home/home1/section-slider1/section-slider1.component';
import { SectionAbout1Component } from './sections/home/home1/section-about1/section-about1.component';
import { SectionWhatWeDo1Component } from './sections/home/home1/section-what-we-do1/section-what-we-do1.component';
import { SectionTestimonials1Component } from './sections/home/home1/section-testimonials1/section-testimonials1.component';
import { SectionServices1Component } from './sections/home/home1/section-services1/section-services1.component';
import { SectionProjects1Component } from './sections/home/home1/section-projects1/section-projects1.component';
import { SectionClients1Component } from './sections/home/home1/section-clients1/section-clients1.component';
import { SectionTeam1Component } from './sections/home/home1/section-team1/section-team1.component';
import { SectionSlider2Component } from './sections/home/home2/section-slider2/section-slider2.component';
import { SectionAbout2Component } from './sections/home/home2/section-about2/section-about2.component';
import { SectionWhatWeDo2Component } from './sections/home/home1/section-what-we-do2/section-what-we-do2.component';
import { SectionProjects2Component } from './sections/home/home2/section-projects2/section-projects2.component';
import { SectionTeam2Component } from './sections/home/home1/section-team2/section-team2.component';
import { SectionServices2Component } from './sections/home/home2/section-services2/section-services2.component';
import { SectionBlogs1Component } from './sections/home/home2/section-blogs1/section-blogs1.component';
import { SectionCounter1Component } from './sections/home/home2/section-counter1/section-counter1.component';
import { SectionTestimonials2Component } from './sections/home/home1/section-testimonials2/section-testimonials2.component';
import { SectionSlider3Component } from './sections/home/home3/section-slider3/section-slider3.component';

import { SectionSlider6Component } from './sections/home/home6/section-slider6/section-slider6.component';
import { SectionAbout3Component } from './sections/home/home3/section-about3/section-about3.component';
import { SectionAwards1Component } from './sections/home/home3/section-awards1/section-awards1.component';
import { SectionWhatWeDo3Component } from './sections/home/home3/section-what-we-do3/section-what-we-do3.component';
import { SectionProjects3Component } from './sections/home/home3/section-projects3/section-projects3.component';
import { SectionBlogs2Component } from './sections/home/home3/section-blogs2/section-blogs2.component';
import { SectionPricing1Component } from './sections/home/home3/section-pricing1/section-pricing1.component';
import { SectionContact1Component } from './sections/home/home3/section-contact1/section-contact1.component';
import { SectionClients2Component } from './sections/home/home3/section-clients2/section-clients2.component';
import { SectionProjects4Component } from './sections/home/home6/section-projects4/section-projects4.component';
import { SectionSimilarProjects4Component } from './sections/home/home6/section-similar-projects4/section-similar-projects4.component';
import { SectionPageBannerComponent } from './sections/section-page-banner/section-page-banner.component';
import { SectionServices3Component } from './sections/services/section-services3/section-services3.component';
import { SectionClients3Component } from './sections/services/section-clients3/section-clients3.component';
import { ElementsBox1Component } from './elements/boxes/elements-box1/elements-box1.component';
import { ElementsBox2Component } from './elements/boxes/elements-box2/elements-box2.component';
import { SectionSpecializations1Component } from './sections/services/section-specializations1/section-specializations1.component';
import { ElementsBox3Component } from './elements/boxes/elements-box3/elements-box3.component';
import { ElementsBox4Component } from './elements/boxes/elements-box4/elements-box4.component';
import { ElementsBox5Component } from './elements/boxes/elements-box5/elements-box5.component';
import { ElementsBox6Component } from './elements/boxes/elements-box6/elements-box6.component';
import { SectionProjectCarousel1Component } from './sections/projects/carousel/section-project-carousel1/section-project-carousel1.component';
import { SectionProjectCarousel2Component } from './sections/projects/carousel/section-project-carousel2/section-project-carousel2.component';
import { SectionProjectCarousel3Component } from './sections/projects/carousel/section-project-carousel3/section-project-carousel3.component';
import { ElementsBox7Component } from './elements/boxes/elements-box7/elements-box7.component';
import { SectionSimilarProjects1Component } from './sections/projects/details/section-similar-projects1/section-similar-projects1.component';
import { SectionSimilarProjects2Component } from './sections/projects/details/section-similar-projects2/section-similar-projects2.component';
import { ElementsBox8Component } from './elements/boxes/elements-box8/elements-box8.component';
import { SectionBlogSidebarComponent } from './sections/blog/section-blog-sidebar/section-blog-sidebar.component';
import { SectionBlogSingleComponent } from './sections/blog/section-blog-single/section-blog-single.component';
import { SectionBlogListingComponent } from './sections/blog/section-blog-listing/section-blog-listing.component';
import { ElementsBox9Component } from './elements/boxes/elements-box9/elements-box9.component';
import { ElementsBox10Component } from './elements/boxes/elements-box10/elements-box10.component';
import { SectionShopDescriptionComponent } from './sections/shop/detail/section-shop-description/section-shop-description.component';
import { SectionShopTabsComponent } from './sections/shop/detail/section-shop-tabs/section-shop-tabs.component';
import { SectionShopRelatedProductsComponent } from './sections/shop/detail/section-shop-related-products/section-shop-related-products.component';
import { ElementsBox11Component } from './elements/boxes/elements-box11/elements-box11.component';
import { SafePipe } from './pipes/safe.pipe';
import { SectionShopHeaderComponent } from './sections/shop/section-shop-header/section-shop-header.component';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    LoaderDirective,
    LoaderComponent,
    Footer1Component,
    Header1Component,
    Footer2Component,
    Header2Component,
    Header3Component,
    Header4Component,
    Header5Component,
    PageAbout1Component,
    PageAbout2Component,
    Services1Component,
    Services2Component,
    ServiceDetailComponent,
    PageTeam1Component,
    PageTeam2Component,
    PageTeamDetailComponent,
    PageProjectGrid3ColsComponent,
    PageProjectGrid3ColsNogutComponent,
    PageProjectGrid4ColsComponent,
    PageProjectGrid4ColsNogutComponent,
    PageProjectGrid5ColsComponent,
    PageProjectGrid5ColsNogutComponent,
    PageProjectMasonry3ColsComponent,
    PageProjectMasonry3ColsNogutComponent,
    PageProjectMasonry4ColsComponent,
    PageProjectMasonry4ColsNogutComponent,
    PageProjectMasonry5ColsComponent,
    PageProjectMasonry5ColsNogutComponent,
    PageProjectCarouselComponent,
    PageProjectDetail1Component,
    PageProjectDetail2Component,
    PageBlogGridComponent,
    PageBlogListingComponent,
    PageBlogMasonryComponent,
    PageBlogSingleComponent,
    PageBlogPostRightSidebarComponent,
    PageShopGridComponent,
    PageShopListComponent,
    PageShopDetailComponent,
    PageShopAccountComponent,
    PageShopCartComponent,
    PageShopCheckoutComponent,
    PageHistoryComponent,
    PageFontIconsComponent,
    PageError404Component,
    PageFaqComponent,
    PageContactUsComponent,
    SectionSlider1Component,
    SectionAbout1Component,
    SectionWhatWeDo1Component,
    SectionTestimonials1Component,
    SectionServices1Component,
    SectionProjects1Component,
    SectionClients1Component,
    SectionTeam1Component,
    SectionSlider2Component,
    SectionAbout2Component,
    SectionWhatWeDo2Component,
    SectionProjects2Component,
    SectionTeam2Component,
    SectionServices2Component,
    SectionBlogs1Component,
    SectionCounter1Component,
    SectionTestimonials2Component,
    SectionSlider3Component,
    SectionSlider6Component,
    SectionAbout3Component,
    SectionAwards1Component,
    SectionWhatWeDo3Component,
    SectionProjects3Component,
    SectionBlogs2Component,
    SectionPricing1Component,
    SectionContact1Component,
    SectionClients2Component,
    SectionProjects4Component,
    SectionSimilarProjects4Component,
    SectionPageBannerComponent,
    SectionServices3Component,
    SectionClients3Component,
    ElementsBox1Component,
    ElementsBox2Component,
    SectionSpecializations1Component,
    ElementsBox3Component,
    ElementsBox4Component,
    ElementsBox5Component,
    ElementsBox6Component,
    SectionProjectCarousel1Component,
    SectionProjectCarousel2Component,
    SectionProjectCarousel3Component,
    ElementsBox7Component,
    SectionSimilarProjects1Component,
    SectionSimilarProjects2Component,
    ElementsBox8Component,
    SectionBlogSidebarComponent,
    SectionBlogSingleComponent,
    SectionBlogListingComponent,
    ElementsBox9Component,
    ElementsBox10Component,
    SectionShopDescriptionComponent,
    SectionShopTabsComponent,
    SectionShopRelatedProductsComponent,
    ElementsBox11Component,
    SafePipe,
    SectionShopHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
