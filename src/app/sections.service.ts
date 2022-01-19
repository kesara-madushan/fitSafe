import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Section } from './section';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(
    private httpClient:HttpClient
  ) { }

  url: string = 'http://localhost:3000/sections';
  // url: string = 'https://fitsafe-backend.el.r.appspot.com/sections';

  getCounts(): Observable<Section[]> {
    return this.httpClient.get<Section[]>(this.url);
  }


}
