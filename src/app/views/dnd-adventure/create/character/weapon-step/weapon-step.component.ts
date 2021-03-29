import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {WeaponService} from '../../../../../shared/services/weapon.service';
import {Weapon} from '../../../../../shared/models/weapon.model';
import {NotifService} from '../../../../../shared/services/notif.service';
import {StatsEnum} from '../../../../../shared/models/stats.enum';
import {SpellDescriptionComponent} from '../../weapon/spell-description/spell-description.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {WeaponDescriptionComponent} from './weapon-description/weapon-description.component';

@Component({
  selector: 'app-weapon-step',
  templateUrl: './weapon-step.component.html',
  styleUrls: ['./weapon-step.component.scss']
})
export class WeaponStepComponent implements OnInit {
  bsModalRef: BsModalRef;

  isLoading = false;
  weapons: Weapon[];
  selectedWeapons: Weapon[] = [];

  searchValue: string;
  currentPage: number;
  weaponsPerPage: number;
  totalWeapons: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isPageEmpty: boolean;

  @Output() submitWeapons: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();

  constructor(private weaponService: WeaponService,
              private notifService: NotifService,
              private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.loadData(this.weaponsPerPage, this.currentPage, this.searchValue);
  }

  loadData(weaponsPerPage: number = 10, currentPage: number = 1, searchValue: string = '') {
    this.searchValue = searchValue;

    this.isLoading = true;
    this.weaponService.getAllPaginated(searchValue, currentPage - 1, weaponsPerPage)
      .subscribe(page => {
          this.currentPage = page.pageable.pageNumber + 1;
          this.weaponsPerPage = page.pageable.pageSize;
          this.totalWeapons = page.totalElements;
          this.totalPages = page.totalPages;
          this.isFirstPage = page.first;
          this.isLastPage = page.last;
          this.isPageEmpty = page.empty;
          this.weapons = page.content;
        }, error => this.notifService.errorNotification(error),
        () => this.isLoading = false);
  }

  openDescription(weapon: Weapon) {
    const initialState = {weapon};
    this.bsModalRef = this.modalService.show(WeaponDescriptionComponent, {initialState});
  }

  isSelected(weapon: Weapon) {
    return this.selectedWeapons.findIndex(x => x.uuid === weapon.uuid) > -1;
  }

  onSelect(weapon: Weapon) {
    if (this.isSelected(weapon)) {
      this.selectedWeapons = this.selectedWeapons.filter(x => x.uuid !== weapon.uuid);
    } else {
      this.selectedWeapons.push(weapon);
    }
  }

  weaponsPerPageChange(perPage: number) {
    this.loadData(perPage, 1, this.searchValue);
  }

  searchWeaponByKeyUp($event: any) {
    const searchValue: string = $event.target.value.toLowerCase().trim();
    this.loadData(this.weaponsPerPage, 1, searchValue);
  }

  changePage($event: any) {
    if (this.currentPage === $event.page) {
      return;
    }
    this.currentPage = $event.page;
    this.loadData(this.weaponsPerPage, this.currentPage, this.searchValue);
  }

  getStatsEnum() {
    return StatsEnum;
  }

  goBack() {
    this.back.emit();
  }

  selectWeapons() {
    this.submitWeapons.emit(this.selectedWeapons);
  }

}
