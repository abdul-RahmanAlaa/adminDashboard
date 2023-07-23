import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
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

  getElementsList() {
    this.elementService.getElements().subscribe({
      next: (res) => {
        this.elements = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getElementsList();

    for (let i = 65; i <= 90; i++) {
      this.alphabets.push(String.fromCharCode(i));
    }
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
        element.title.toLocaleLowerCase().includes(filterBy)
      );
    }
  }

  filterElements(selectedFilter: string): IElement[] {
    let filteredElements = this.elements;

    if (selectedFilter !== 'All') {
      filteredElements = filteredElements.filter(
        (element: IElement) =>
          element.title.charAt(0).toLocaleLowerCase() ===
          selectedFilter.toLocaleLowerCase()
      );
    } else {
      this.getElementsList();
      return this.elements;
    }
    return filteredElements;
  }
}
