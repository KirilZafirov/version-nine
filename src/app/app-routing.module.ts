import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [  
{ path: 'employees', loadChildren: () => import('./features/employees/employees.module').then(m => m.EmployeesModule) },
{ path: 'calculations', loadChildren: () => import('./features/calculations/calculations.module').then(m => m.CalculationsModule) },
{
  path: '', 
  redirectTo:'/calculations',
  pathMatch: 'full'
},
{
  path: '**',
  pathMatch: "full",
  redirectTo:'/calculations'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
