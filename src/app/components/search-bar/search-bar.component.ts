import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchValue: string = '';

  // the model toggler start here
  @Output() toggleShowModal = new EventEmitter<boolean>();
  showModal = false;

  toggleShowModalValue(): void {
    this.showModal = !this.showModal;
    this.toggleShowModal.emit(this.showModal);
  }
  // the model toggler end here
}
