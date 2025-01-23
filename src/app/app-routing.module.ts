import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultdevelopmentComponent } from './Modules/shared/defaultdevelopment/defaultdevelopment.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
