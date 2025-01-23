import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { map, mergeAll, of } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-textanimation',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        width: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        fontSize: '34px',
        opacity: 0.1,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s'),
      ])
    ]),
     trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({
           opacity: 1,
          //  height: '100px',
          //  fontSize: '34px',
           color:'red'
           
          })),
      ]),
      transition(':leave', [
        animate('5s', style({ opacity: 0 }))
      ])
    ]),
  ],
  templateUrl: './textanimation.component.html',
  styles: [],
 
})
export class TextanimationComponent {
  mockData = ['Angular', 'RxJS', 'TypeScript'];

  // observable$ = of(this.mockData);
  //observable$=from(this.mockData)
   //observable$ = form([1, 2, 3, 4]);

  //  ********************
   // mergeMap==map+mergeAll

  // sourceObservable=of(1,2,3);

  //   getVal=(v:any)=>{
  //       return of(v*10)
  //   }
   
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  // onAnimationEvent(event: AnimationEvent) {
    onAnimationEvent(event: any) {
      console.log("event------>",event)
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

  }
  ngOnInit():void{
    

// let map1 =this.sourceObservable.pipe(
// map(val =>
// this.getVal(val)),
// mergeAll()
// )
//   map1.subscribe(value => console.log("Val is ----->",value));
  }
  
  

}
