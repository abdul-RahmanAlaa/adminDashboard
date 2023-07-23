import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ElementsService } from 'src/app/services/elements.service';

@Component({
  selector: 'app-adding-modal',
  templateUrl: './adding-modal.component.html',
  styleUrls: ['./adding-modal.component.scss'],
})
export class AddingModalComponent {
  @Input() showModal = false;
  elementForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _elementsService: ElementsService
  ) {
    this.elementForm = this._fb.group({
      title: '',
      image: '',
      type: '',
      rDate: '',
      status: '',
    });
  }

  closeModal(): void {
    this.showModal = false;
  }

  saveModal(): void {
    // Perform save action here
    if (this.elementForm.valid) {
      this._elementsService.addElement(this.elementForm.value).subscribe({
        next: (val: any) => {
          alert('added successfully');
          this.closeModal();
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }
}
