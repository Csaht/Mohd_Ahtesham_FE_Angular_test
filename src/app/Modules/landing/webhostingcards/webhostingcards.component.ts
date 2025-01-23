import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-webhostingcards',
  templateUrl: './webhostingcards.component.html',
  styleUrls: ['./webhostingcards.component.css']
})
export class WebhostingcardsComponent {
  @Input() imgUrl:any
  @Input() cardHeading:string=null

  @Input() cardPara:string=null


}
