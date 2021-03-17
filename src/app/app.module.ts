import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BookingComponent } from './components/booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatSliderModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
