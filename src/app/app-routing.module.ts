import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';

const routes: Routes = [
  {path: '', redirectTo: 'list-employee', pathMatch: 'full'}, 
  {path: 'list-employee', component: ListEmployeeComponent},
  {path:'create-employee', component: CreateEmployeeComponent}, 
  {path: '**', redirectTo: 'list-employee', pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
