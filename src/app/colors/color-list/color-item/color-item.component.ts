import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../color.model';

@Component({
  selector: 'app-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.css']
})
export class ColorItemComponent implements OnInit {

  @Input() color: Color;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
