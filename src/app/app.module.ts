import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { LoginComponent } from './login-fr/login-fr.component';
import { LoginArComponent } from './login-ar/login-ar.component';
import { LoginEnComponent } from './login-en/login-en.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    FormulaireComponent,
    LoginArComponent,
    LoginEnComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    FormBuilder

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
