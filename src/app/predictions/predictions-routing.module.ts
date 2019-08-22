import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredictionsListComponent } from './predictions-list/predictions-list.component';

const routes: Routes = [
  { path: '', component: PredictionsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictionsRoutingModule { }
