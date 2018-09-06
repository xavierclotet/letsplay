import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Layout } from './layout.model';

export interface State extends Store<Layout> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'layout' })
export class LayoutUIStore extends Store<State> {

  constructor() {
    super({});
  }

}

