import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from '../global';
import {Country} from '../country';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService{
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://covid-statistic-app.herokuapp.com/';
  }

  public getGlobal(): Observable<Global>{
      return this.httpClient.get<Global>(this.baseUrl + '/global');
  }

  public getCountries(): Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.baseUrl + '/countries');
  }


}
