import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TeapotComponent } from './teapot/teapot.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitchComponent,
    ThemeSwitchComponent,
    TeapotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
