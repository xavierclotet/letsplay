import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { LayoutUIStore } from './layout.store';
import { LayoutDataService } from './layout-data.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private layoutUIStore: LayoutUIStore,
              private layoutDataService: LayoutDataService) {
  }

  get() {
    // this.layoutDataService.get().subscribe((entities: ServerResponse) => {
      // this.layoutStore.set(entities);
    // });
  }

  add() {
    // this.layoutDataService.post().subscribe((entity: ServerResponse) => {
      // this.layoutStore.add(entity);
    // });
  }

}
