import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
/* import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth'; */
import { firebaseConfig } from '../environments/firebase.config';
import { HotnessComponent } from './components/hotness/hotness.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from './custom-material.module';
import { GameDetailsDialogComponent } from './components/game-details-dialog/game-details-dialog.component';

@NgModule({
  declarations: [AppComponent, HotnessComponent, GameDetailsDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomMaterialModule,
    AngularFireModule.initializeApp(firebaseConfig), /* , 'letsplay' */
    AngularFirestoreModule,
  ],
  entryComponents: [
    GameDetailsDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
