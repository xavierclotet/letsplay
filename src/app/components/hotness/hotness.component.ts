import { Component, OnInit } from '@angular/core';
import { BggService } from '../../services/bgg.service';
import { trigger } from '@angular/animations';
import { fadeIn, fadeOut } from '../../utils/animations/fade-animations';
import { MatDialogRef, MatDialog } from '@angular/material';
import { GameDetailsDialogComponent } from '../game-details-dialog/game-details-dialog.component';

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
export class HotnessComponent implements OnInit {
  hotness: any[];
  
  loading = false;
  dialogRef: MatDialogRef<GameDetailsDialogComponent>;
  constructor(
    private bggService: BggService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loading = true;
    this.bggService.getHotness().subscribe(hotness => {
      this.hotness = hotness;
      this.loading = false;
    });
  }

  showDetails(id: string) {
    this.dialogRef = this.dialog.open(GameDetailsDialogComponent, {
      // panelClass: 'dialogError',
      // maxHeight: '600px',
      width: '600px',
      data: id,
      hasBackdrop: true,
      disableClose: false,
      closeOnNavigation: true
    });

   
  }

  

}

