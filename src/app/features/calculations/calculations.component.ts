import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { map, filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import { SessionStorageService } from 'src/app/core/services/session-storage.service';
export interface EntryProduct {
  subject: string;
  offeredGoods: string;
  production: string;
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
  styleUrls: ['./calculations.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: StorageService, useClass: SessionStorageService }],
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
  constructor(private formBuilder: FormBuilder, private sessionStorage: SessionStorageService) {
    const storage = this.sessionStorage.getItemSync('calculation-form');

    const formControlData = (storage && storage.items) ? 
          this.getNewFormArray(storage.items) : new FormArray([this.getNewItemControl(null)]);

    if(storage && storage.items) {
      this.result = this.calculateResult(storage.items)
    }
    this.dynamicForm = this.formBuilder.group({
      items: formControlData
    });

    this.formEndResult = this.formBuilder.group({
      priceAfterLicitation: [null]
    });
  }

  result: Result = {
    priceBeforeDDV: 0,
    priceAfterDDV: 0
  };

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

  getNewFormArray(items) {
    return new FormArray(items.map(e => this.getNewItemControl(e)))
  }

  getNewItemControl(item: EntryProduct | null ) {
    if(item) {
      return this.formBuilder.group({
        subject: [item.subject],
        priceBeforeTax: [item.priceBeforeTax, Validators.required],
        measureAndAmount: [item.measureAndAmount, Validators.required],
        ddvRate: [item.ddvRate, Validators.required],
        totalRequired: [item.totalRequired, Validators.required]
      });
    } else {
      return this.formBuilder.group({
        subject: [''],
        priceBeforeTax: [null, Validators.required],
        measureAndAmount: ['kg', Validators.required],
        ddvRate: [0.05, Validators.required],
        totalRequired: [null, Validators.required]
      });
    } 
  }

  remove(i) {
    this.items.removeAt(i);
  }
  addNewItem() {
    this.items.push(this.getNewItemControl(null));
  }
  // convenience getters for easy access to form fields
  get formItems() { return this.dynamicForm.controls; }
  get items() { return this.formItems.items as FormArray; }

  priceAfterLicitation() {
    const reducerPercent = this.calculateReducerPercent(this.formEndResult.get('priceAfterLicitation').value);
    this.items.controls.forEach(f => {
      const nextValue = this.calculateReducedValue(f.get('priceBeforeTax').value, reducerPercent);
      f.get('priceBeforeTax').patchValue(nextValue);
    })
  }

  calculateReducerPercent(finalValue: number) {
    const result = this.result.priceBeforeDDV - finalValue;
    return (result / this.result.priceBeforeDDV);
  }

  calculateReducedValue(value: number, percent: number) {
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
