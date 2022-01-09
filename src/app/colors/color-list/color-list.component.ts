import { Component, OnInit } from '@angular/core';
import { Color } from '../color.model';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  private _listFilter = '';
  filteredColors: Color[] = [];

  colors: Color[] = [];

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.colorService.colorsChanged
      .subscribe(
        (colors: Color[]) => {
          this.colors = colors;
          this.filteredColors = colors;
        }
      );
    this.colors = this.colorService.getColors();
    this.filteredColors = this.colors;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredColors = this.performFilter(value);
  }

  performFilter(filterBy: string): Color[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.colors.filter((color: Color) =>
      color.name.toLocaleLowerCase().includes(filterBy));
  }

}
