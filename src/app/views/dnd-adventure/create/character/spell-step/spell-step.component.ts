import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Spell} from '../../../../../shared/models/spell.model';
import {NotifService} from '../../../../../shared/services/notif.service';
import {StatsEnum} from '../../../../../shared/models/stats.enum';
import {SpellService} from '../../../../../shared/services/spell.service';
import {SpellDescriptionComponent} from './spell-description/spell-description.component';

@Component({
  selector: 'app-spell-step',
  templateUrl: './spell-step.component.html',
  styleUrls: ['./spell-step.component.scss']
})
export class SpellStepComponent implements OnInit {
  bsModalRef: BsModalRef;

  isLoading = false;
  spells: Spell[];
  selectedSpells: Spell[] = [];

  searchValue: string;
  currentPage: number;
  spellsPerPage: number;
  totalSpells: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isPageEmpty: boolean;

  @Output() submitSpells: EventEmitter<any> = new EventEmitter();
  @Output() back: EventEmitter<any> = new EventEmitter();

  constructor(private spellService: SpellService,
              private notifService: NotifService,
              private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.loadData(this.spellsPerPage, this.currentPage, this.searchValue);
  }

  loadData(spellsPerPage: number = 10, currentPage: number = 1, searchValue: string = '') {
    this.searchValue = searchValue;

    this.isLoading = true;
    this.spellService.getAllPaginated(searchValue, currentPage - 1, spellsPerPage)
      .subscribe(page => {
          this.currentPage = page.pageable.pageNumber + 1;
          this.spellsPerPage = page.pageable.pageSize;
          this.totalSpells = page.totalElements;
          this.totalPages = page.totalPages;
          this.isFirstPage = page.first;
          this.isLastPage = page.last;
          this.isPageEmpty = page.empty;
          this.spells = page.content;
        }, error => this.notifService.errorNotification(error),
        () => this.isLoading = false);
  }

  openDescription(spell: Spell) {
    const initialState = {spell};
    this.bsModalRef = this.modalService.show(SpellDescriptionComponent, {initialState});
  }

  isSelected(item: Spell) {
    return this.selectedSpells.findIndex(x => x.uuid === item.uuid) > -1;
  }

  onSelect(item: Spell) {
    if (this.isSelected(item)) {
      this.selectedSpells = this.selectedSpells.filter(x => x.uuid !== item.uuid);
    } else {
      this.selectedSpells.push(item);
    }
  }

  itemsPerPageChange(perPage: number) {
    this.loadData(perPage, 1, this.searchValue);
  }

  searchItemByKeyUp($event: any) {
    const searchValue: string = $event.target.value.toLowerCase().trim();
    this.loadData(this.spellsPerPage, 1, searchValue);
  }

  changePage($event: any) {
    if (this.currentPage === $event.page) {
      return;
    }
    this.currentPage = $event.page;
    this.loadData(this.spellsPerPage, this.currentPage, this.searchValue);
  }

  getStatsEnum() {
    return StatsEnum;
  }

  goBack() {
    this.back.emit();
  }

  selectSpells() {
    this.submitSpells.emit(this.selectedSpells);
  }


}
