import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from '../app/formulaire/formulaire.component'

const routes: Routes = [

  { path:'',component: IndexComponent},
  { path:'login',component: LoginComponent},
  { path:'formulaire',component: FormulaireComponent},
  { path: 'dashboard',component: DashboardComponent},
  { path: 'dash',component: Dashboard2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
