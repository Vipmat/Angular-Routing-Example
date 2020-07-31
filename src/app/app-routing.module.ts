import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsModule, routes as childRoutes } from './products/products.module';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';


const routes: Routes = [
  // basic Routes
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactus', redirectTo: 'contact'},

  // authentication
  { path: 'login', component: LoginComponent},
  { path: 'protected', component: ProtectedComponent, canActivate: [ LoggedInGuard ]},

  // nested
  { path: 'products', component: ProductsComponent, children: childRoutes }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // added this for our child module
    ProductsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
