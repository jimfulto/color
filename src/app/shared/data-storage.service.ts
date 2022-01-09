import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Color } from "../colors/color.model";
import { ColorService } from "../colors/color.service";
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private colorService: ColorService) {}
    
    storeColors() {
        const colors = this.colorService.getColors();
        return this.http.put('https://ng-colors-default-rtdb.firebaseio.com/colors.json', colors).subscribe(
            response => {
                console.log(response);
            }
        );
    }

    fetchColors() {
        return this.http.get<Color[]>('https://ng-colors-default-rtdb.firebaseio.com/colors.json',
        ).pipe(
            tap(colors => {
                this.colorService.setColors(colors);
            })
        );
    }
}
