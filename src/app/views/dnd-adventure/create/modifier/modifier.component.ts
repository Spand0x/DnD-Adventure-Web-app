import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import {StatsEnum} from '../../../../shared/models/stats-enum.model';
import {ModifierService} from '../../../../shared/services/modifier.service';
import {NotifService} from '../../../../shared/services/notif.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit {
  modForm: FormGroup;
  stats = Object.keys(StatsEnum);

  constructor(private modifierService: ModifierService,
              private notificationService: NotifService) {
  }

  ngOnInit(): void {
    this.modForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      value: new FormControl(0, [Validators.required, Validators.min(-10), Validators.max(10)])
    });
  }

  onSubmit() {
    if (this.modForm.valid) {
      this.modifierService.save(this.modForm.value)
        .subscribe(modifier => {
          this.notificationService.successNotification('Modifier created successfully');
        }, error => this.notificationService.errorNotification(error));
    }
  }

}
