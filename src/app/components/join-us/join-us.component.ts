import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  mediumHandle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  join_us = () => {
    console.log(this.mediumHandle);
  }

}
