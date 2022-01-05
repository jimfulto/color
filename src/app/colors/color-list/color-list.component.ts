import { Component, OnInit } from '@angular/core';
import { Color } from '../color.model';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors: Color[] = [];

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.colors = this.colorService.getColors();
  }

}
