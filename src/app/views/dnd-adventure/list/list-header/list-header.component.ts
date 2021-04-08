import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html'
})
export class ListHeaderComponent implements OnInit {

  searchValue = '';
  itemsOptionsPerPage = [5, 10, 20];

  @Input() itemOrder;
  @Input() itemOptionsOrders;
  @Input() itemsPerPage = 10;
  @Output() searchItemsByKey: EventEmitter<any> = new EventEmitter();
  @Output() itemsPerPageChange: EventEmitter<any> = new EventEmitter();
  @Output() changeOrderBy: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchKeyUp() {
    this.searchItemsByKey.emit(this.searchValue);
  }

  onChangeItemsPerPage(item: number) {
    this.itemsPerPageChange.emit(item);
  }

  onChangeOrderBy(item) {
    this.itemOrder = item;
    this.changeOrderBy.emit(item);
  }
}
