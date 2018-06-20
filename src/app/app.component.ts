import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BggService } from './services/bgg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  users: Observable<any[]>;
  loading: boolean;
  form: FormGroup;
  success: boolean;
  hotness$: any;
  private usersCollecion: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private fb: FormBuilder, private bggService: BggService) { }

  ngOnInit() {
    this.usersCollecion = this.afs.collection('users');
    this.users = this.usersCollecion.valueChanges();
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]

    });

    this.hotness$ = this.bggService.getHotness();
  }


  async submitHandler() {
    this.loading = true;
    const formValue = this.form.value;
    try {
      await this.usersCollecion.add(formValue);
      this.success = true;
    } catch(err) {
      console.error(err);
    }
    this.loading = false;
  }


}
