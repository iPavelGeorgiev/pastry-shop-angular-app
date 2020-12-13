import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

const materialModules = [
  MatMenuModule,
  MatButtonModule,
  MatBadgeModule
]

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
