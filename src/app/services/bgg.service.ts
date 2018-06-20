import { throwError  } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';
const APIURL = 'https://www.boardgamegeek.com/xmlapi2/';

@Injectable({
  providedIn: 'root'
})
export class BggService {

  constructor(
    private _http: HttpClient
  ) { }

  getHotness() {
    return this._http.get(`${APIURL}hot?type=boardgame`, { responseType: 'text'}).pipe(
      map((res:Response) => {
        let data;
        xml2js.parseString( res, function (err, xml) {
          data = xml['items']['item'];
       });
       return data;
      })
    );
   
   /*  this._http.get(`${APIURL}hot?type=boardgame`)
    .pipe(
      map((res:any) => res.text()),
      catchError((error: any) => throwError(error))); */
  }
}
