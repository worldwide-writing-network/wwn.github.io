import { Component } from '@angular/core';
import * as brand from '@fortawesome/free-brands-svg-icons'
import * as solid from '@fortawesome/free-solid-svg-icons'
import {ThemesService} from './themes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title : string = 'worldwide-writing-network';
  faFacebookF: brand.IconDefinition = brand.faFacebookF;
  faMedium: brand.IconDefinition = brand.faMediumM;
  faLinkedin: brand.IconDefinition = brand.faLinkedinIn;
  faTwitter: brand.IconDefinition = brand.faTwitter;
  faYoutube: brand.IconDefinition = brand.faYoutube;
  faInstagram: brand.IconDefinition = brand.faInstagram;
  faShareAlt: brand.IconDefinition = solid.faShareAlt;
  faFileExport: brand.IconDefinition = solid.faFileExport;
  totalVisits: number = 0;

  // function to be called when someone wants to join the community on medium
  joinCommunity = () => {
    console.log('Join the community');
  }

  constructor(private themeService : ThemesService) {}

  changeTheme = () => {
    //console.log('Change the theme');
    this.themeService.changeActiveTheme()
  }
}