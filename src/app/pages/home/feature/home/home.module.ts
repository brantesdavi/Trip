import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HotelCardModule } from '../../ui/hotel-card/hotel-card.module';
import { SearchModule } from '../../ui/search/search.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HotelCardModule,
    SearchModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
