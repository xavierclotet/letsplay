import { throwError  } from 'rxjs';
import { Injectable } from '@angular/core';
import {  map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';
// old https://www.boardgamegeek.com/xmlapi/boardgame/233867

const APIURL = 'https://www.boardgamegeek.com/xmlapi2/';
const APIJSONURL = 'https://bgg-json.azurewebsites.net/';

@Injectable({
  providedIn: 'root'
})
export class BggService {
  
  constructor(
    private _http: HttpClient
  ) { }

  getHotness() { // https://www.boardgamegeek.com/xmlapi2/hot?type=boardgame
    return this._http.get(`${APIURL}hot?type=boardgame`, { responseType: 'text'}).pipe(
      map((res:Response) => {
        let data;
        xml2js.parseString( res, function (err, xml) {
          data = xml['items']['item'];
       });
       return data;
      }),
      catchError((error: any) => throwError(error))
    );
  }

  getBggDetail(id: string) {
    return this._http.get(`${APIJSONURL}thing/${id}`).pipe(
      catchError((error: any) => throwError(error))
    );
  }

  
}
