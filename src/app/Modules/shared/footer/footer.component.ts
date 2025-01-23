import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private router:Router){

  }

  navigate(){
    this.router.navigateByUrl('page-error')
  }

 footerSections = [
  { heading: 'Service', links: ['Consulting', 'Design', 'Development'] },
  { heading: 'Hosting', links: ['Shared Hosting', 'Cloud Hosting', 'VPS Hosting'] },
  { heading: 'Company', links: ['About Us', 'Careers', 'Blog'] },
  { heading: 'Help', links: ['Support', 'FAQ', 'Contact Us'] },
]
}
