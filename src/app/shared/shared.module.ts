import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    CarouselComponent
  ]
})
export class SharedModule { }
