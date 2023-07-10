import { Component, Input, OnInit } from '@angular/core';
import { IElement } from 'src/app/models/ielement';
import { ElementsService } from 'src/app/services/elements.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit {
  elements: IElement[] = [];
  private _childListFilter: string = '';

  // the alphabets filters start here
  alphabets: string[] = [];
  selectedFilter = 'All';

  // the alphabets filters end here

  constructor(private elementService: ElementsService) {}

  ngOnInit(): void {
    this.elements = this.elementService.element;

    for (let i = 65; i <= 90; i++) {
      this.alphabets.push(String.fromCharCode(i));
    }
  }

  @Input() get childListFilter(): string {
    return this._childListFilter;
  }

  set childListFilter(value: string) {
    this._childListFilter = value;
    this.elements = this.filterElements( this.selectedFilter);
    this.elements = this.searchElements( value);

  }

  searchElements(filterBy: string): IElement[] {
    if (filterBy === '') {
      return (this.elements = this.elementService.element);
    } else {
      filterBy = filterBy.toLocaleLowerCase();
      return this.elements.filter((element: IElement) =>
        element.title.toLocaleLowerCase().includes(filterBy)
      );
    }
  }

  filterElements( selectedFilter: string): IElement[] {
    let filteredElements = this.elementService.element;

    if (selectedFilter !== 'All') {
      filteredElements = filteredElements.filter(
        (element: IElement) =>
          element.title.charAt(0).toLocaleLowerCase() ===
          selectedFilter.toLocaleLowerCase()
      );
    } else {
      filteredElements = this.elementService.element;
    }
    return filteredElements;
  }
}
