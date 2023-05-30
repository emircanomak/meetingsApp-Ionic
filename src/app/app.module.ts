import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import {provideFirebaseApp, initializeApp} from "@angular/fire/app"
import {getFirestore, provideFirestore} from '@angular/fire/firestore'
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,RouterModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    provideFirebaseApp(()=> initializeApp(environment.firebaseConfig)),
    provideFirestore(()=> getFirestore())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
