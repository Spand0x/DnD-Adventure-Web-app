import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {NotifService} from '../../../../shared/services/notif.service';
import {ModifierService} from '../../../../shared/services/modifier.service';
import {RaceService} from '../../../../shared/services/race.service';
import {StatsEnum} from '../../../../shared/models/stats-enum.model';
import {Modifier} from '../../../../shared/models/stats-modifiers.model';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  raceForm: FormGroup;
  advantages: FormArray;
  disadvantages: FormArray;
  modifiers: Modifier[];

  constructor(private notificationService: NotifService,
              private modifierService: ModifierService,
              private raceService: RaceService) {

  }

  ngOnInit(): void {
    this.initModifiers();
    this.raceForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      advantages: new FormArray([this.createFormGroup()]),
      disadvantages: new FormArray([this.createFormGroup()]),
      modifiers: new FormControl(null, [Validators.required])
    });
  }

  initModifiers() {
    this.modifierService.findAll()
      .subscribe((res) => {
        res.forEach(mod => {
          // @ts-ignore
          mod.name = `${StatsEnum[mod.name]} ${mod.value > 0 ? '+' + mod.value : mod.value}`;
        });
        this.modifiers = res;
      }, error => {
        console.log(error);
      });
  }

  onSubmit() {
    if (this.raceForm.valid) {
      this.raceService.save(this.raceForm.value)
        .subscribe(race => {
          this.notificationService.successNotification('Race created successfully.');
        }, error => this.notificationService.errorNotification(error));
    }
  }

  addAdvantage() {
    this.advantages = this.raceForm.get('advantages') as FormArray;
    this.advantages.push(this.createFormGroup());
  }

  removeAdvantage(index) {
    this.advantages = this.raceForm.get('advantages') as FormArray;
    this.advantages.removeAt(index);
  }

  addDisadvantage() {
    this.disadvantages = this.raceForm.get('disadvantages') as FormArray;
    this.disadvantages.push(this.createFormGroup());
  }

  removeDisadvantage(index) {
    this.disadvantages = this.raceForm.get('disadvantages') as FormArray;
    this.disadvantages.removeAt(index);
  }

  createFormGroup() {
    return new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }
}
