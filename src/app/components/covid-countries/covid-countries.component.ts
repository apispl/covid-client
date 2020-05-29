import { Component, OnInit } from '@angular/core';
import {Country} from '../../country';
import {CovidServiceService} from '../../services/covid-service.service';

@Component({
  selector: 'app-covid-countries',
  templateUrl: './covid-countries.component.html',
  styleUrls: ['./covid-countries.component.css']
})
export class CovidCountriesComponent implements OnInit {
  countries: Country[];

  constructor(private covidServiceService: CovidServiceService) { }

  ngOnInit(): void {
    this.covidServiceService.getCountries().subscribe(value => {
      this.countries = value;
    });
  }
}
