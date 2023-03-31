import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UneteComponent } from './components/unete/unete.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'unete', component:UneteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
