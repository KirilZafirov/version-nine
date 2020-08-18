import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsComponent } from './calculations.component';

describe('CalculationsComponent', () => { 
  it('should create', () => {
    let component: CalculationsComponent = new CalculationsComponent();
   
    component.ngOnInit();

    expect(component).toBeTruthy();
  });
});
