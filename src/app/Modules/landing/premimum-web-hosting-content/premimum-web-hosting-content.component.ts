import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premimum-web-hosting-content',
  templateUrl: './premimum-web-hosting-content.component.html',
  styleUrls: ['./premimum-web-hosting-content.component.css']
})
export class PremimumWebHostingContentComponent {
  @Input() contentHeading:string
  @Input() contentPara:string
  @Input() imgUrl:any
  @Input() currentTab:string

}
