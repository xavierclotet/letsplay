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
    MatIconModule,
    MatDialogModule
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
    MatIconModule,
    MatDialogModule
  ]
})
export class CustomMaterialModule {}
