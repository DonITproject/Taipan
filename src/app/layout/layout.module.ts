import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Scroll To
import { ScrollspyDirective } from '../scrollspy.directive';

// Bootstrap Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// component
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {ScrollToModule} from "@andrei4ik/ngx-scroll-to";

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    ScrollspyDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ScrollToModule.forRoot(),
    BsDropdownModule.forRoot()
  ]
})
export class LayoutModule { }
