import { getCurrencySymbol } from "@angular/common";
import { Injectable } from "@angular/core";
import { Color } from "./color.model";

@Injectable({ providedIn: 'root'})
export class ColorService {

    private colors: Color[] =
        [
            new Color('AMBER', '#FFBF00'),
            new Color('AUBURN', '#A52A2A'),
            new Color('AQUA', '#00FFFF'),
            new Color('BANANA YELLOW', '#FFE135'),
            new Color('BATTLESHIP GREY', '#848482'),
            new Color('CAMBRIDGE BLUE', '#A3C1AD'),
            new Color('CAMEL', '#C19A6B')
        ];


    getColors() {
        //get copy of colors
        return this.colors.slice();
    }
}

// #a4c639 android green 

// Aqua
// #00ffff

// Banana yellow
// #ffe135

// Battleship grey
// #848482

// Cambridge Blue
// #a3c1ad

// Camel
// #c19a6b

// Dark cyan
// #008b8b

// Dark goldenrod
// #b8860b