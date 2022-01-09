import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { FormsModule } from '@angular/forms';
import { ColorListComponent } from './colors/color-list/color-list.component';
import { ColorItemComponent } from './colors/color-list/color-item/color-item.component';
import { ColorsComponent } from './colors/colors.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequirementsComponent,
    ColorsComponent,
    ColorListComponent,
    ColorItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
