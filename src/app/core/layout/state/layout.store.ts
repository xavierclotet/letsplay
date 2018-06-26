import { Injectable } from '@angular/core';
import { Store, StoreMetadata } from '@datorama/akita';
import { Layout } from './layout.model';

export interface State {

}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'layout' })
export class LayoutUIStore extends Store<State> {

  constructor() {
    super();
  }

}

