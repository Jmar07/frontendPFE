import { LoginComponent } from './login-fr/login-fr.component';
import { LoginEnComponent } from './login-en/login-en.component';
import { LoginArComponent } from './login-ar/login-ar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from '../app/formulaire/formulaire.component'

const routes: Routes = [

  { path:'',component: HomeComponent},
  { path:'login-fr',component: LoginComponent},
  { path:'login-en',component: LoginEnComponent},
  { path:'login-ar',component: LoginArComponent},
  { path:'formulaire',component: FormulaireComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
