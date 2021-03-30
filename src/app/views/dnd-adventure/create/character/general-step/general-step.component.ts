import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-general-step',
  templateUrl: './general-step.component.html',
  styleUrls: ['./general-step.component.scss']
})
export class GeneralStepComponent implements OnInit {
  generalForm: FormGroup;
  @Output() generalDescription: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.generalForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      gold: new FormControl(0, [Validators.required, Validators.min(0)]),
      imageUrl: new FormControl('https://i.pinimg.com/originals/ca/81/7c/ca817c36cee2353a47a48e47f4e52809.jpg')
    });
  }

  submit() {
    if (this.generalForm.valid) {
      this.generalDescription.emit(this.generalForm.value);
    }
  }


}
