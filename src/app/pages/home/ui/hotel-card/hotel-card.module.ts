import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelCardComponent } from './hotel-card.component';



@NgModule({
  declarations: [
    HotelCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HotelCardComponent
  ]
})
export class HotelCardModule { }
