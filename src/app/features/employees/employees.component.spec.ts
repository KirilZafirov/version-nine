import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesComponent } from './employees.component';

describe('EmployeesComponent', () => { 
  it('should create', () => {
    let component: EmployeesComponent = new EmployeesComponent();
   
    component.ngOnInit();

    expect(component).toBeTruthy();
  });
});
