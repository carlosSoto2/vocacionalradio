import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageShopGridComponent } from '../../pages/shop/page-shop-grid/page-shop-grid.component';
import { PageShopListComponent } from '../../pages/shop/page-shop-list/page-shop-list.component';
import { PageShopDetailComponent } from '../../pages/shop/page-shop-detail/page-shop-detail.component';
import { PageShopAccountComponent } from '../../pages/shop/page-shop-account/page-shop-account.component';
import { PageShopCartComponent } from '../../pages/shop/page-shop-cart/page-shop-cart.component';
import { PageShopCheckoutComponent } from '../../pages/shop/page-shop-checkout/page-shop-checkout.component';

const routes: Routes = [
  { path: '', component: PageShopGridComponent },
  { path: 'shop', component: PageShopGridComponent },
  { path: 'shop-list', component: PageShopListComponent },
  { path: 'shop-detail', component: PageShopDetailComponent },
  { path: 'shop-myaccount', component: PageShopAccountComponent },
  { path: 'shop-cart', component: PageShopCartComponent },
  { path: 'shop-checkout', component: PageShopCheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
