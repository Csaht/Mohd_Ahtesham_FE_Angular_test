import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



  const components=[ 
      HeaderComponent,
      FooterComponent,
    ]

@NgModule({
  declarations: [
   ...components,
   
  
  ],
  imports: [
    CommonModule,
    // MaterialModule,
    // NgFor
  ],
  exports:[...components]
})
export class SharedModule { }
