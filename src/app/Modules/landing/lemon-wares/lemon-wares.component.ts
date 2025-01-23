import { Component, ViewChild } from '@angular/core';
import { LemonwarescardsComponent } from '../lemonwarescards/lemonwarescards.component';

@Component({
  selector: 'app-lemon-wares',
  templateUrl: './lemon-wares.component.html',
  styleUrls: ['./lemon-wares.component.css'],
})
export class LemonWaresComponent {
  tabSelectionStatus: string;
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
  basic: any = [
    {
      cardTitle: 'Starter',
      cardTitleText:
        'with all your customers via all conversation channels in one central dashboard.',
      cardDollerValue: 1,
      cardDollerText: 'Per month',
      cardList: this.cardList,
    },
    {
      cardTitle: 'Standard',
      cardTitleText:
        'with all your customers via all conversation channels in one central dashboard.',
      cardDollerValue: 3,
      cardDollerText: 'Per month',
      cardList: this.cardList,
    },
    {
      cardTitle: 'Suprem',
      cardTitleText:
        'with all your customers via all conversation channels in one central dashboard.',
      cardDollerValue: 4,
      cardDollerText: 'Per month',
      cardList: this.cardList,
    },
  ];

  premium: any = [
    {
      cardTitle: 'Starter',
      cardTitleText:
        'with all your customers via all conversation channels in one central dashboard.',
      cardDollerValue: 12,
      cardDollerText: 'Per month',
      cardList: this.cardList,
    },
    {
      cardTitle: 'Standard',
      cardTitleText:
        'with all your customers via all conversation channels in one central dashboard.',
      cardDollerValue: 33,
      cardDollerText: 'Per month',
      cardList: this.cardList,
    },
    {
      cardTitle: 'Suprem',
      cardTitleText:
        'with all your customers via all conversation channels in one central dashboard.',
      cardDollerValue: 44,
      cardDollerText: 'Per month',
      cardList: this.cardList,
    },
  ];
  tabsArray = [
    {
      tabNam: 'Bsasic',
      tabVal: this.basic,
    },
    {
      tabNam: 'Premium',
      tabVal: this.premium,
    },
  ];
  selectedTabArray: any;

  onTabChange(index: number): void {
    this.selectedTabArray = this.tabsArray[index]?.tabVal;

    // Get the tab object using the index
    this.childComponent.updateStatus(
      this.tabSelectionStatus,
      this.selectedTabArray
    );
  }

  isToggled = false; // Initialize the toggle state
  cardDollerValue = 1;
  cardDollerValue5 = 5;

  ngAfterViewInit() {
    console.log('Child component accessed: ', this.childComponent);
  }

  toggleChildComponentStatus(isToggled: boolean) {
    if (this.childComponent) {
      // Update child component status
      this.tabSelectionStatus = isToggled ? 'Yearly' : 'Monthly';
      this.childComponent.updateStatus(
        this.tabSelectionStatus,
        this.selectedTabArray
      );
    }
  }
}
