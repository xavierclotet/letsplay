import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { LayoutUIStore, State } from './layout.store';
import { Layout } from './layout.model';

@Injectable({
  providedIn: 'root'
})
export class LayoutUIQuery extends Query<State> {

  constructor(protected store: LayoutUIStore) {
    super(store);
  }

}
