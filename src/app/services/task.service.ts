import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private db: AngularFireDatabase) { }


  performIn(time: number, worker: string, opts = {}) {
    const queueRef = this.db.list('tasks'); 
  
    time = Date.now() + time;
    queueRef.push({ time, worker, opts });
  }

  performAt(time: number, worker: string, opts = {}) {
    const queueRef = this.db.list('tasks');
    
    queueRef.push({ time, worker, opts });
  }

  performPeriodic(id: string, time: number, interval: number, worker: string, opts = {}) {
    const taskRef = this.db.object(`tasks/${id}`);
    
    taskRef.set({ time, interval, worker, opts });
  }



}
