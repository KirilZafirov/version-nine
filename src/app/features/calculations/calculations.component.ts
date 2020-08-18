import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { map, filter, debounce, debounceTime, tap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
export interface EntryProduct { 
  subject: string;
  offeredGoods: string;
  production:string;
  priceBeforeTax: number;
  measureAndAmount: string;
  ddvRate: number;
  totalRequired: number;
}
export interface Result {
  priceBeforeDDV: number;
  priceAfterDDV: number;
}
export interface SelectOption {
  display: string;
  value: string | number;
}
@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  dynamicForm: FormGroup; 
  formEndResult: FormGroup;

  destroy$ = new Subject();
  measureAndAmount: SelectOption[] = [
    {
      display: 'Килограм',
      value: 'kg'
    },
    {
      display: 'Литар',
      value: 'lt'
    },
    {
      display: 'Број',
      value: 'br'
    }
  ];

  ddvRate: SelectOption[] = [
    {
      display: '5%',
      value: 0.05
    },
    {
      display: '18%',
      value: 0.18
    }
  ]
  constructor(private formBuilder: FormBuilder) { 
    this.dynamicForm = this.formBuilder.group({
      items: new FormArray([this.getNewItemControl()])
  });
  this.formEndResult = this.formBuilder.group({
    priceAfterLicitation : [null]
});
  }
   
  result: Result = {
    priceBeforeDDV: 0,
    priceAfterDDV: 0
  };;
  ngOnInit() {
    this.dynamicForm.valueChanges.pipe(
      filter(() => this.dynamicForm.valid),
      map((listOfProducts) => this.calculateResult(listOfProducts.items)),
      takeUntil(this.destroy$)
    ).subscribe((result: Result) => {
      this.result = result;
    }); 
  }
  
  calculateResult(listOfProducts: EntryProduct[]): Result { 
    let start = {
      priceBeforeDDV: 0,
      priceAfterDDV: 0
    };
   listOfProducts.map((item) => {
      const calculation = this.calculateSingle(item);
      start.priceAfterDDV += calculation.priceAfterDDV;
      start.priceBeforeDDV += calculation.priceBeforeDDV; 
    });

    return start;
  }

  calculateSingle(product: EntryProduct) {
    const priceBeforeDDVForAll = product.priceBeforeTax * product.totalRequired;
    const taxDiff = priceBeforeDDVForAll * product.ddvRate;
    return {
      priceBeforeDDV: priceBeforeDDVForAll,
      priceAfterDDV: taxDiff
    }
  }

  getNewItemControl() {
    return this.formBuilder.group({ 
      subject: [''],
      priceBeforeTax: [null, Validators.required],
      measureAndAmount: ['kg' , Validators.required],
      ddvRate: [0.05 , Validators.required],
      totalRequired: [null , Validators.required]
    });
  }

  remove(i) {
    this.items.removeAt(i);
  }
  addNewItem() {
    this.items.push(this.getNewItemControl());
  }
  // convenience getters for easy access to form fields
  get formItems() { return this.dynamicForm.controls; }
  get items() { return this.formItems.items as FormArray; } 

  priceAfterLicitation(){
    this.items.controls.forEach(f => {
      const percent = this.calculateReducerPercent(this.formEndResult.get('priceAfterLicitation').value);
      const nextValue = this.calculateReducedValue(f.get('priceBeforeTax').value, percent);
      f.get('priceBeforeTax').patchValue(nextValue);
    })
  }

  calculateReducerPercent(finalValue: number) { 
    const result = this.result.priceBeforeDDV - finalValue;
    return result / this.result.priceBeforeDDV;
  }

  calculateReducedValue(value: number , percent: number) { 
    return value - (value * percent);
  }

  onSubmit() { 

      // stop here if form is invalid
      if (this.dynamicForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  submitEndResult() {
     // stop here if form is invalid
     if (this.formEndResult.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formEndResult.value, null, 4));
  }


  onReset() {
      // reset whole form back to initial state 
      this.dynamicForm.reset();
      this.items.clear();
  }

  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
