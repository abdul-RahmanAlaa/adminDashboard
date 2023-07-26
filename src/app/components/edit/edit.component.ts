import { Component, Input, OnChanges } from '@angular/core';
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
  @Input() elementId!: string;
  toggleEdit: boolean = false;
  element: IElement = {} as IElement;

  subscriptions?: Subscription;

  constructor(private _elementsService: ElementsService) {}

  ngOnChanges(): void {
    this.openedModal(this.elementId);
  }

  openedModal(id: string): void {
    this.subscriptions = this._elementsService
      .getElementByIdFire(id)
      .subscribe({
        next: (element) => {
          this.element = element;
        },
        error: (err) => {
          console.log('Error Occurred ' + err.message);
        },
      });
  }

  closeModal(): void {
    this.showEditingModal = false;
  }

  editElement(): void {
    this.toggleEdit = true;
  }

  saveChanges(): void {
    this.toggleEdit = false;
    this._elementsService
      .updateElementFire(this.element)
      .then(() => {
        alert('Element updated successfully');
      })
      .catch((err) => {
        console.log('Error With Edit Element ' + err.message);
      });
  }

  deleteElement(): void {
    if (confirm(`Are you sure you want to delete [ ${this.element.name} ]`)) {
      this._elementsService
        .deleteElementFire(this.element)
        .then(() => {
          alert('Element deleted successfully');

          this.showEditingModal = false;
        })
        .catch((error) => {
          console.error('Error deleting element: ', error);
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
