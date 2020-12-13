import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewProductsComponent } from './new-products/new-products.component';
import { ProsComponent } from './pros/pros.component';
import { OurStoryComponent } from './our-story/our-story.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NewProductsComponent,
    ProsComponent,
    OurStoryComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
