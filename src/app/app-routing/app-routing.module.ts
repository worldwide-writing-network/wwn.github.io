import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../components/welcome/welcome.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: '' , redirectTo : 'home' , pathMatch: 'full'}
];  // this is where routes are defined

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  
}
