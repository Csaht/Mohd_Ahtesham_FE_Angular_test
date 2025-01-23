import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

 footerSections = [
  { heading: 'Service', links: ['Consulting', 'Design', 'Development'] },
  { heading: 'Hosting', links: ['Shared Hosting', 'Cloud Hosting', 'VPS Hosting'] },
  { heading: 'Company', links: ['About Us', 'Careers', 'Blog'] },
  { heading: 'Help', links: ['Support', 'FAQ', 'Contact Us'] },
]
}
