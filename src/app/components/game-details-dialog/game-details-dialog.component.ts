import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BggService } from 'src/app/services/bgg.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-game-details-dialog',
  templateUrl: './game-details-dialog.component.html',
  styleUrls: ['./game-details-dialog.component.css']
})
export class GameDetailsDialogComponent implements OnInit {
  detail$: Observable<any>;
  constructor(
    public dialogRef: MatDialogRef<GameDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private bggService: BggService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.detail$ = this.bggService.getBggDetail(this.data);
  }

  acceptDialog() {
    this.onNoClick();
  }

}
