import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CharacterClassService} from '../../../../../shared/services/character-class.service';
import {CharacterClass} from '../../../../../shared/models/character-class.model';
import {NotifService} from '../../../../../shared/services/notif.service';

@Component({
  selector: 'app-class-step',
  templateUrl: './class-step.component.html',
  styleUrls: ['./class-step.component.scss']
})
export class ClassStepComponent implements OnInit {

  isLoading = false;
  classes: CharacterClass[];
  @Output() characterClass: EventEmitter<CharacterClass> = new EventEmitter();

  constructor(private classService: CharacterClassService,
              private notifService: NotifService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.classService.getAllClasses().subscribe(classes => {
        this.classes = classes;
      }, error => this.notifService.errorNotification(error),
      () => this.isLoading = false);
  }

  selectClass(characterClass: CharacterClass) {
    this.characterClass.emit(characterClass);
  }

  setIsExpanded(event, clickedObject) {
    clickedObject.isExpanded = event;
  }

  hitPointsDiceNumber(characterClass: CharacterClass) {
    return characterClass.hitPointsDice.toString().slice(1);
  }

}
