import { FormStorageDirective } from './directives/form-sesion-storage.directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router';
 

const sharedComponents = [ FormStorageDirective ];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [...sharedComponents],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...sharedComponents
  ],
  providers: [
    
  ],
  entryComponents: [],
})
export class SharedModule { }