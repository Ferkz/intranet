import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  constructor(library: FaIconLibrary) {
    library.addIcons();
  }

  ngOnInit(): void {}
}
