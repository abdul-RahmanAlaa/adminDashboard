import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-adding-modal',
  templateUrl: './adding-modal.component.html',
  styleUrls: ['./adding-modal.component.scss'],
})
export class AddingModalComponent {
  @Input() showModal = false;

  closeModal(): void {
    this.showModal = false;
  }

  saveModal(): void {
    // Perform save action here
    this.closeModal();
  }
}