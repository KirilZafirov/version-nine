import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
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
  }
   
  result$: Observable<Result>;
  ngOnInit() {
    this.result$ = this.dynamicForm.valueChanges.pipe(
      filter(() => this.dynamicForm.valid),
      map((listOfProducts) => this.calculateResult(listOfProducts.items))
    );
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
      ddvRate: [0.18 , Validators.required],
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

  onSubmit() { 

      // stop here if form is invalid
      if (this.dynamicForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
  }

  onReset() {
      // reset whole form back to initial state 
      this.dynamicForm.reset();
      this.items.clear();
  }
}
