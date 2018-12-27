import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap , delay} from 'rxjs/operators';
import { BggService } from '../../services/bgg.service';
import { trigger } from '@angular/animations';
import { fadeIn, fadeOut } from '../../utils/animations/fade-animations';

const RESPONSE_DELAY = 1750;

@Component({
  selector: 'app-hotness',
  animations: [
    // trigger('fadeOut', fadeOut()),
    trigger('fadeIn', fadeIn(':enter')) 
  ],
  templateUrl: './hotness.component.html',
  styleUrls: ['./hotness.component.scss']
})
export class HotnessComponent  {
  hotness$: Observable<any[]> = this.bggService.getHotness();
  detail$: Observable<any>;
  useSpinner = false;
  constructor(
    private bggService: BggService
  ) { }


  showDetails(id: string) {
   this.detail$ = this.bggService.getBggDetail(id);
  }

}

