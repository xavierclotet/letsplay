import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SessionStore, State } from './session.store';
import { Session } from './session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends QueryEntity<State, Session> {

  constructor(protected store: SessionStore) {
    super(store);
  }

}
