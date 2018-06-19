import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: Observable<any>;
  loading: boolean;
  form: FormGroup;
  success: boolean;
  constructor(private afs: AngularFirestore, private fb: FormBuilder) { }

  ngOnInit() {
    this.users = this.afs.collection('users').valueChanges();
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]

    })
  }


  async submitHandler() {
    this.loading = true;
    const formValue = this.form.value;
    try {
      await this.afs.collection('users').add(formValue);
      this.success = true;
    } catch(err) {
      console.error(err);
    }

    this.loading = false;

  }


}
