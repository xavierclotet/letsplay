import { throwError  } from 'rxjs';
import { Injectable } from '@angular/core';
import {  map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';
// old https://www.boardgamegeek.com/xmlapi/boardgame/233867

const APIURL = 'https://www.boardgamegeek.com/xmlapi2/';
const APIJSONURL = 'https://bgg-json.azurewebsites.net/';

// https://boardgamegeek.com/wiki/page/BGG_XML_API2#
// http://bgg-json.azurewebsites.net/
@Injectable({
  providedIn: 'root'
})
export class BggService {

  constructor(
    private _http: HttpClient
  ) { }

  getHotness() { // https://www.boardgamegeek.com/xmlapi2/hot?type=boardgame
    // http://bgg-json.azurewebsites.net/hot
    return this._http.get(`${APIURL}hot?type=boardgame`, { responseType: 'text'}).pipe(
      map((res: any) => {
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

  searchGame(item: string) {
    return this._http.get(`${APIJSONURL}search?/type=boardgame&query=${item}`).pipe(
      catchError((error: any) => throwError(error))
    );
  }

  // plays https://www.boardgamegeek.com/xmlapi2/plays?username=darklife74
  // collection https://www.boardgamegeek.com/xmlapi2/collection/?username=darklife74&own=1


}
