import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { BggService } from '../../services/bgg.service';

@Component({
  selector: 'app-hotness',
  templateUrl: './hotness.component.html',
  styleUrls: ['./hotness.component.css']
})
export class HotnessComponent implements OnInit {
  hotness$: any;
  detail$: Observable<any>;

  constructor(
    private bggService: BggService
  ) { }

  ngOnInit() {
    this.hotness$ = this.bggService.getHotness();
  }

  showDetails(id: string) {
   this.detail$ = this.bggService.getBggDetail(id);
  }

}
