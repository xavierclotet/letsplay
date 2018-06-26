import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Session } from './session.model';

export interface State extends EntityState<Session> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends EntityStore<State, Session> {

  constructor() {
    super();
  }

}

