import {Component, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html'
})
export class ModalConfirmationComponent {
  modalRef: BsModalRef;

  @Input() buttonName: string;
  @Input() buttonClass: string;
  @Input() message: string;
  @Output() confirmation: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: BsModalService) {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.confirmation.emit();
    this.modalRef.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }
}
