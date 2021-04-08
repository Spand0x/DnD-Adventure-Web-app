import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-pagination',
  templateUrl: './list-pagination.component.html'
})
export class ListPaginationComponent implements OnInit, OnChanges {
  items;

  currentPage: number;
  totalItems: number;
  totalPages: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  isPageEmpty: boolean;

  @Input() service;
  @Input() itemsPerPage: number;
  @Input() searchValue: string;
  @Input() orderBy: { name, value };
  @Output() data: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.loadData(this.itemsPerPage, this.currentPage, this.searchValue, this.orderBy.value);
  }

  loadData(itemsPerPage: number = 10, currentPage: number = 1, searchValue: string = '', orderBy: string = '') {
    this.searchValue = searchValue;

    this.service.getAllPaginated(searchValue, currentPage - 1, itemsPerPage, orderBy)
      .subscribe(page => {
          this.currentPage = page.pageable.pageNumber + 1;
          this.itemsPerPage = page.pageable.pageSize;
          this.totalItems = page.totalElements;
          this.totalPages = page.totalPages;
          this.isFirstPage = page.first;
          this.isLastPage = page.last;
          this.isPageEmpty = page.empty;
          this.items = page.content;
          this.data.emit(page);
        }
        // }, error => this.notifService.errorNotification(error),
      );
  }

  changePage($event: any) {
    if (this.currentPage === $event.page) {
      return;
    }
    this.currentPage = $event.page;
    this.loadData(this.itemsPerPage, this.currentPage, this.searchValue, this.orderBy.value);
  }
}
