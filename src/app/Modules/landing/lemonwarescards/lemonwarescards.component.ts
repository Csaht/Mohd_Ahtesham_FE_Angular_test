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
  @Input() defaultList: any = [];
  
 ngOnInit(){
   console.log("Val-->",this.defaultList)
 }
  // updateStatus(status: string) {
  //   if (typeof this.cardDollerValue !== 'number') {
  //     this.cardDollerValue = 0;
  //   }

  //   if (status === 'Yearly') {
  //     this.cardDollerValue++;
  //   } else if (status === 'Monthly') {
  //     this.cardDollerValue--;
  //   }
  // }

  // updateStatus(status: string) {
  //   if (typeof this.cardDollerValue !== 'number') {
  //     this.cardDollerValue = 0;
  //   }

  //   if (status === 'Yearly') {
     
  //     this.defaultList?.map((item)=>{
        
  //       item?.cardDollerValue += 100
  //      });
  //   } else if (status === 'Monthly') {
  //     this.cardDollerValue--;
  //   }
  // }

  updateStatus(status: string ,cardArray?): void {
    if (typeof this.cardDollerValue !== 'number') {
      this.cardDollerValue = 0; // Ensure cardDollerValue is a number
    }
    console.log("clickable value --->",status)
    console.log(" current defaultList --->",this.defaultList)
    console.log("current array--->",cardArray)
    this.defaultList=cardArray
    if (status === 'Yearly' && this.defaultList) {
      // Update cardDollerValue for each item in defaultList
      this.defaultList = this.defaultList.map((item) => {
        if (item && typeof item.cardDollerValue === 'number') {
          item.cardDollerValue += 100; // Increment by 100
        }
        return item;
      });
    } else if (status === 'Monthly') {
      this.defaultList = this.defaultList.map((item) => {
        if (item && typeof item.cardDollerValue === 'number') {
          item.cardDollerValue -= 100; // Increment by 100
        }
        return item;
      });
     // this.cardDollerValue = Math.max(this.cardDollerValue - 1, 0); // Decrement but ensure it doesn't go below 0
    }
  }
  
}
