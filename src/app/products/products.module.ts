import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router, Routes } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';


export const routes: Routes = [
  { path: ':id', component: ProductComponent }

];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  exports: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class ProductsModule{}
