import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @Input() faMedium: any;
  @Input() faFacebook: any;
  @Input() faTwitter: any;
  @Input() faYoutube: any;
  @Input() faLinkedin: any;
  @Input() faInstagram: any;
  @Input() faShareAlt: any;
  @Input() faFileExport: any;

  constructor() { }

  ngOnInit(): void {
  }

}
