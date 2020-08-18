
import { NgModule } from '@angular/core'; 

import { SharedModule } from './../../shared/shared.module';

import { CalculationsRoutingModule } from './calculations-routing.module';
import { CalculationsComponent } from './calculations.component';


@NgModule({
  declarations: [CalculationsComponent],
  imports: [
    SharedModule,
    CalculationsRoutingModule
  ] , 
  exports: [
    CalculationsComponent
  ]
})
export class CalculationsModule { }
