import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lemonwarescards',
  templateUrl: './lemonwarescards.component.html',
  styleUrls: ['./lemonwarescards.component.css'],
})
export class LemonwarescardsComponent {
  //public status: string = 'Inactive'; // Default status

  @Input() cardTitle: string;
  @Input() cardTitleText: string;
  @Input() cardDollerValue: any;
  @Input() cardDollerText: string;
  @Input() cardList: any = [];

  updateStatus(status: string) {
    if (typeof this.cardDollerValue !== 'number') {
      this.cardDollerValue = 0;
    }

    if (status === 'Active') {
      this.cardDollerValue++;
    } else if (status === 'Inactive') {
      this.cardDollerValue--;
    }
  }
}
