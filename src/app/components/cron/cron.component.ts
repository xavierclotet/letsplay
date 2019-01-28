import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-cron',
  templateUrl: './cron.component.html',
  styleUrls: ['./cron.component.scss']
})
export class CronComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
   

  }

  addTask() {
    this.taskService.performIn(minutes(30), 'sendWelcomeEmail', { user: '1' } )
  }
  

}

function minutes(v: number) {
  return v * 60 * 1000;
}
