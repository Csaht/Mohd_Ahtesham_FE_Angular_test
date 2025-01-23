import { Component, ViewChild } from '@angular/core';
import { LemonwarescardsComponent } from '../lemonwarescards/lemonwarescards.component';

@Component({
  selector: 'app-lemon-wares',
  templateUrl: './lemon-wares.component.html',
  styleUrls: ['./lemon-wares.component.css'],
 
})
export class LemonWaresComponent {
  @ViewChild(LemonwarescardsComponent) childComponent:
    | LemonwarescardsComponent
    | undefined;
  cardList: any = [
    '2GB SSD',
    '10GB Bandwidth',
    '15 Email Accounts',
    '2GB SSD',
    '10GB Bandwidth',
    '15 Email Accounts',
    '2GB SSD',
    '10GB Bandwidth',
    '15 Email Accounts',
    '2GB SSD',
    '10GB Bandwidth',
    '15 Email Accounts',
  ];
  isToggled = false; // Initialize the toggle state
  cardDollerValue = 1;
  cardDollerValue5=5

  ngAfterViewInit() {
    console.log('Child component accessed: ', this.childComponent);
  }

  toggleChildComponentStatus(isToggled: boolean) {
    if (this.childComponent) {
      // Update child component status
      const status = isToggled ? 'Monthly' : 'Yearly';
      this.childComponent.updateStatus(status);
    }
  }
}
