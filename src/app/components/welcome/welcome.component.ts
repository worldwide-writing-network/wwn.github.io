import { Component, OnInit } from '@angular/core';


@Component({
  //selector: 'app-welcome',  // commenting this as we will use it through routing
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
