import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchValue: string = '';

  @Output() isLoggedOut = new EventEmitter<boolean>();

  // the model toggler start here
  @Output() toggleShowAddingModal = new EventEmitter<boolean>();
  showAddingModal = false;

  toggleShowAddingModalValue(): void {
    this.showAddingModal = !this.showAddingModal;
    this.toggleShowAddingModal.emit(this.showAddingModal);
  }
  // the model toggler end here
}
