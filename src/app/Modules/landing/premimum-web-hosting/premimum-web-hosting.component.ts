import { Component } from '@angular/core';

@Component({
  selector: 'app-premimum-web-hosting',
  templateUrl: './premimum-web-hosting.component.html',
  styleUrls: ['./premimum-web-hosting.component.css'],
})
export class PremimumWebHostingComponent {
  contentHeading: string = 'Premium Web Hosting for Your Website';
  contentPara: string =
    'Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.';
  imgUrl: any = 'assets/images/Group 6.png';
  currentTab: string;
}
