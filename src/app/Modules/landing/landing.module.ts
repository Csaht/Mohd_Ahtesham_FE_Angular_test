import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DynamicHostDirective } from './dynamic-host.directive';
import { TestCarosulbootstrapComponent } from './test-carosulbootstrap/test-carosulbootstrap.component';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { TextanimationComponent } from './textanimation/textanimation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CloudWebHostingComponent } from './cloud-web-hosting/cloud-web-hosting.component';
import { WebhostingcardsComponent } from './webhostingcards/webhostingcards.component';
import { LemonwarescardsComponent } from './lemonwarescards/lemonwarescards.component';
import { DynamicComponent1Component } from './dynamic-component1/dynamic-component1.component';
import { DynamicComponent2Component } from './dynamic-component2/dynamic-component2.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';
import { LemonWaresComponent } from './lemon-wares/lemon-wares.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PremimumWebHostingComponent } from './premimum-web-hosting/premimum-web-hosting.component';
import { PremimumWebHostingContentComponent } from './premimum-web-hosting-content/premimum-web-hosting-content.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

const components=[ 
  HomeComponent,
  LandingComponent,
  DynamicHostDirective,
  // ******************
  CloudWebHostingComponent,
  WebhostingcardsComponent,
  LemonwarescardsComponent,

  GetInTouchComponent,
  CustomerReviewsComponent,
  LemonWaresComponent,
]

const routes: Routes = [
  {path:'',redirectTo:'landing',pathMatch:'full'},
  {path:'landing',component:LandingComponent}
 ]

@NgModule({
  declarations: [
   ...components,
   DynamicComponent1Component,
   DynamicComponent2Component,
   TestCarosulbootstrapComponent,
   TextanimationComponent,
   PremimumWebHostingComponent,
   PremimumWebHostingContentComponent,

  
  //  CloudWebHostingComponent,
   
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgbCarouselModule,
    
    BrowserAnimationsModule,
    RouterModule,
    MatTabsModule,
    MatSlideToggleModule,
     MatIconModule,
      FormsModule
   
  
  ],
  exports:[...components],
  providers: [NgbCarouselConfig],
})
export class LandingModule { }
