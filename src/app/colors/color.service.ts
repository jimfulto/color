import { getCurrencySymbol } from "@angular/common";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Color } from "./color.model";

@Injectable({ providedIn: 'root'})
export class ColorService {

    colorsChanged = new Subject<Color[]>();

    private colors: Color[] = [];
        // [
        //     new Color('AMBER', '#FFBF00'),
        //     new Color('AUBURN', '#A52A2A'),
        //     new Color('AQUA', '#00FFFF'),
        //     new Color('BANANA YELLOW', '#FFE135'),
        //     new Color('BATTLESHIP GREY', '#848482'),
        //     new Color('CAMBRIDGE BLUE', '#A3C1AD'),
        //     new Color('CAMEL', '#C19A6B')
        // ];

    constructor() {}
    
    getColors() {
        //get copy of colors
        return this.colors.slice();
    }

    setColors(colors: Color[]) {
        this.colors = colors;
        this.colorsChanged.next(this.colors.slice());
    }
}
