import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users;
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.users = this.db.collection('users').valueChanges();
  }


}
