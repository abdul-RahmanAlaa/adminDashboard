import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  alphabets: string[] = [];
  ngOnInit() {
    for (let i = 65; i <= 90; i++) {
      this.alphabets.push(String.fromCharCode(i));
    }
  }
}
