import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

const materialModules = [
  MatMenuModule,
  MatButtonModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
]

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
