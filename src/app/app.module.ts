import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CovidInfoComponent } from './components/covid-info/covid-info.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CovidServiceService} from './services/covid-service.service';
import { CovidCountriesComponent } from './components/covid-countries/covid-countries.component';


@NgModule({
  declarations: [
    AppComponent,
    CovidInfoComponent,
    CovidCountriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [CovidServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
