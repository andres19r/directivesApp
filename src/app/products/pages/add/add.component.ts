import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  colorCustom: string = 'green';
  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  hasError(field: string): boolean {
    return this.myForm.get('name')?.invalid || false;
  }
}
