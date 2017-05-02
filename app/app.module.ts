import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCIbRuMzcaYIN_cJqSrGo0AdplJKC6wFKw",
  authDomain: "recipe-box-f6b0c.firebaseapp.com",
  databaseURL: "https://recipe-box-f6b0c.firebaseio.com",
  projectId: "recipe-box-f6b0c",
  storageBucket: "recipe-box-f6b0c.appspot.com",
  messagingSenderId: "979909186719"
};

@NgModule({
  imports: [ BrowserModule, FormsModule, AngularFireModule.initializeApp(firebaseConfig) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
