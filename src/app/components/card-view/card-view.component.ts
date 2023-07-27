import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IElement } from 'src/app/models/ielement';
import { ElementsService } from 'src/app/services/elements.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  elements: IElement[] = [];
  data: IElement[] = [];
  private _childListFilter: string = '';

  // the model toggler start here
  @Output() toggleShowEditingModal = new EventEmitter<boolean>();
  showEditingModal = false;
  @Output() elementIdValue = new EventEmitter<string>();
  elementId!: string;

  toggleShowEditingModalValue(id: string): void {
    this.showEditingModal = !this.showEditingModal;
    console.log(this.showEditingModal);

    this.toggleShowEditingModal.emit(this.showEditingModal);

    console.log(id);
    this.elementId = id;

    this.elementIdValue.emit(this.elementId);
  }
  // the model toggler end here

  constructor(private elementService: ElementsService) {}

  ngOnInit(): void {
    this.getElementsList();
    
    for (let i = 65; i <= 90; i++) {
      this.alphabets.push(String.fromCharCode(i));
    }

    // window.addEventListener('scroll', this.loadMore.bind(this));
  }

  // loadMore() {
  //   const lastElement = this.elements[this.elements.length - 1];
  //   const lastId = lastElement.id;

  //   if (!lastElement) {
  //     return;
  //   }

  //   this.elementService.getElementsListFire(lastId).subscribe((res) => {
  //     const newElements = res.map((e) => {
  //       return {
  //         id: e.payload.doc.id,
  //         ...(e.payload.doc.data() as {}),
  //       } as IElement;
  //     });
  //     this.elements = [...this.elements, ...newElements];
  //   });
  // }

  getElementsList() {
    this.elementService.getElementsListFire().subscribe((res) => {
      this.elements = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as IElement;
      });
    });
  }

  @Input() get childListFilter(): string {
    return this._childListFilter;
  }

  set childListFilter(value: string) {
    this._childListFilter = value;
    if (value === '') {
      this.getElementsList();
    } else {
      this.elements = this.searchElements(value);
    }
  }

  searchElements(filterBy: string): IElement[] {
    if (filterBy === '') {
      this.getElementsList();
      return this.elements;
    } else {
      filterBy = filterBy.toLocaleLowerCase();
      return this.elements.filter((element: IElement) =>
        element.name.toLocaleLowerCase().includes(filterBy)
      );
    }
  }

  // the alphabets filters start here
  alphabets: string[] = [];
  selectedFilter = 'All';

  filterElements(selectedFilter: string): IElement[] {
    let filteredElements = this.elements;

    if (selectedFilter !== 'All') {
      filteredElements = filteredElements.filter(
        (element: IElement) =>
          element.name.charAt(0).toLocaleLowerCase() ===
          selectedFilter.toLocaleLowerCase()
      );
    } else {
      this.getElementsList();
      return this.elements;
    }
    return filteredElements;
  }
}
// the alphabets filters end here
