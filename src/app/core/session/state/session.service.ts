import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { SessionStore } from './session.store';
import { SessionDataService } from './session-data.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private sessionStore: SessionStore,
              private sessionDataService: SessionDataService) {
  }

  get() {
    // this.sessionDataService.get().subscribe((entities: ServerResponse) => {
      // this.sessionStore.set(entities);
    // });
  }

  add() {
    // this.sessionDataService.post().subscribe((entity: ServerResponse) => {
      // this.sessionStore.add(entity);
    // });
  }

}
