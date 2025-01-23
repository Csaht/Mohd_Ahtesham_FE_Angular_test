import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test-carosulbootstrap',
  templateUrl: './test-carosulbootstrap.component.html',
  styleUrls: ['./test-carosulbootstrap.component.css']
})
export class TestCarosulbootstrapComponent {

  images = ['assets/Images/Carosul_img/AT.AUTO.png','assets/Images/Carosul_img/Group.png','assets/Images/Carosul_img/Group 4.png'];

  logos = [
    ['assets/Images/Carosul_img/AT.AUTO.png', 'assets/Images/Carosul_img/Group.png', 'assets/Images/Carosul_img/AT.AUTO.png', 'assets/Images/Carosul_img/Group.png', 'assets/Images/Carosul_img/AT.AUTO.png'],
    ['assets/Images/Carosul_img/Group.png', 'assets/Images/Carosul_img/Group.png', 'assets/Images/Carosul_img/Group.png'],
  ];

  showNavigationArrows = false;
	showNavigationIndicators = false;

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}
