import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Componentes
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';

//constante
const appRoutes:Routes=[
	{path:'',component:HomeComponent},
	{path:'login',component:LoginComponent},
	{path:'registro',component:RegisterComponent},
	{path:'home',component:HomeComponent}

];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);