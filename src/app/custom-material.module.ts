import { NgModule } from '@angular/core';
import {
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,    
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class CustomMaterialModule {}
