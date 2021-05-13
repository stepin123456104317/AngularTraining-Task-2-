import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllcitiesComponent } from './allcities/allcities.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { BangloreComponent } from './banglore/banglore.component';

@NgModule({
  declarations: [
    AppComponent,
    AllcitiesComponent,
    HyderabadComponent,
    BangloreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
