import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private usersCollecion: AngularFirestoreCollection;

  constructor(
    // private afs: AngularFirestore, private fb: FormBuilder
    ) { }

  ngOnInit() {
    /* this.usersCollecion = this.afs.collection('users');
    this.users = this.usersCollecion.valueChanges();
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]

    }); */
  }

 /*  async submitHandler() {
    this.loading = true;
    const formValue = this.form.value;
    try {
      await this.usersCollecion.add(formValue);
      this.success = true;
    } catch(err) {
      console.error(err);
    }
    this.loading = false;
  } */


}
