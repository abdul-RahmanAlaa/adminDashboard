import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ElementsService } from 'src/app/services/elements.service';
// import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-adding-modal',
  templateUrl: './adding-modal.component.html',
  styleUrls: ['./adding-modal.component.scss'],
})
export class AddingModalComponent {
  @Input() showAddingModal = false;

  elementForm: FormGroup;
  // id = uuidv4();

  constructor(
    private _fb: FormBuilder,
    private _elementsService: ElementsService
  ) {
    this.elementForm = this._fb.group({
      // id: this.id,
      name: [''],
      type: [''],
      // releaseDate: [''],
      description: [''],
      link: [''], //image
      rate: [''],
      genres: this._fb.array(['']),
    });
  }

  get genres() {
    return this.elementForm.get('genres') as FormArray;
  }

  addGenre() {
    if (this.genres.length < 3) {
      this.genres.push(this._fb.control(''));
    }
  }

  closeModal(): void {
    this.showAddingModal = false;
    this.elementForm.reset();
  }

  saveModal(): void {
    if (this.elementForm.valid) {
      this._elementsService.addElementFire(this.elementForm.value);
      alert(`You added this element successfully`);
      this.closeModal();
      this.elementForm.reset();
    }
  }
}
