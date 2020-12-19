import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToSignIn = () => redirectUnauthorizedTo(["/auth/sign-in"]);
const redirectLoggedInToHomepage = () => redirectLoggedInTo("/");

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    ...canActivate(redirectLoggedInToHomepage)
  },
  { 
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule),
    ...canActivate(redirectUnauthorizedToSignIn)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./features/reviews/reviews.module').then(m => m.ReviewsModule)
  },
  { path: 'about-us', loadChildren: () => import('./features/about-us/about-us.module').then(m => m.AboutUsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
