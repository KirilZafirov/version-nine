import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  dynamicForm: FormGroup; 

  constructor(private formBuilder: FormBuilder) { 
    this.dynamicForm = this.formBuilder.group({
      items: new FormArray([this.getNewItemControl()])
  });
  }
   
  ngOnInit() {
      
  }
 
  
  getNewItemControl() {
    return this.formBuilder.group({
      name: ['', Validators.required],
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

  onClear() {
      // clear errors and reset ticket fields 
      this.items.reset();
  }
}
