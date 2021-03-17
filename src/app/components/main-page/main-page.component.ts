import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BookingComponent} from '../booking/booking.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private dialog: MatDialog) { }

  openBooking(): void{
    this.dialog.open(BookingComponent, { disableClose: true });
  }

}
