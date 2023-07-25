import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IElement } from 'src/app/models/ielement';
import { ElementsService } from 'src/app/services/elements.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnChanges {
  @Input() showEditingModal: boolean = false;
  @Input() elementId!: number;
  toggleEdit: boolean = true;
  element: IElement = {} as IElement;

  subscriptions?: Subscription;

  constructor(private _elementsService: ElementsService) {}

  ngOnChanges(): void {
    this.openedModal();
    console.log(this.elementId);
  }

  openedModal(): void {
    this.subscriptions = this._elementsService
      .getElementById(this.elementId)
      .subscribe((element) => {
        this.element = element;
      });
  }

  closeModal(): void {
    this.showEditingModal = false;
  }

  editElement(): void {
    this.toggleEdit = false;
  }

  saveChanges(): void {
    this._elementsService.editElement(this.element).subscribe({
      next: (prd) => {
        this.toggleEdit = true;

        alert('Product updated successfully');
      },
      error: (err) => {
        console.log('Error With Edit Product' + err.message);
      },
    });
  }

  deleteElement(): void {
    let confirmValue = confirm(
      `Are you sure you want to delete this ${this.element.type}`
    );
    if (confirmValue) {
      this._elementsService.deleteElement(this.element.id).subscribe({
        next: (res) => {
          alert('Product deleted successfully');
          this.closeModal();
        },
        error: (err) => {
          alert('Error With Delete Product' + err.message);
        },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
