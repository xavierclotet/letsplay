import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotnessComponent } from './components/hotness/hotness.component';
import { CronComponent } from './components/cron/cron.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hotness',
    pathMatch: 'full'
  },
  {
    path: 'hotness',
    component: HotnessComponent
  },
  {
    path: 'cron',
    component: CronComponent
  },
  {
    path: '**',
    redirectTo: 'hotness'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }