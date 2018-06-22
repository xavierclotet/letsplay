import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { 
  MatToolbarModule, MatIconModule, MatInputModule, MatButtonModule, MatSelectModule, MatCheckboxModule,
  MatChipsModule, MatCardModule
} from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
/* import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth'; */
import { firebaseConfig } from '../environments/firebase.config';
import { HotnessComponent } from './components/hotness/hotness.component';
import { FlexLayoutModule }  from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, HotnessComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig, 'letsplay'),
    AngularFirestoreModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
