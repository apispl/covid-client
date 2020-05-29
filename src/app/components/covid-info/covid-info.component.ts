import { Component, OnInit } from '@angular/core';
import {CovidServiceService} from '../../services/covid-service.service';
import {Global} from '../../global';

@Component({
  selector: 'app-covid-info',
  templateUrl: './covid-info.component.html',
  styleUrls: ['./covid-info.component.css']
})
export class CovidInfoComponent implements OnInit {

  global: Global;

  constructor(private covidServiceService: CovidServiceService) { }

  ngOnInit(): void {
    this.covidServiceService.getGlobal().subscribe(value => {
        this.global = value;
    });
  }

}
