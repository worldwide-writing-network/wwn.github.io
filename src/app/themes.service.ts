import { Injectable } from '@angular/core';
import { theme1, theme2, theme3, Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  constructor() { }

  private activeTheme: Theme = theme1;
  private availableThemes: Theme[] = [theme1, theme2, theme3];
  private activeIndex: number = 0;

  changeActiveTheme = () : void=> {
    this.activeIndex = (this.activeIndex + 1) % this.availableThemes.length;

    this.activeTheme = this.availableThemes[this.activeIndex];

    Object.keys(this.activeTheme.properties).forEach((property) => {
      document.documentElement.style.setProperty(property, this.activeTheme.properties[property]);
    })
  }
}
