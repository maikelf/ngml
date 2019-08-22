import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkItemsListComponent } from './work-items-list/work-items-list.component';

const routes: Routes = [
  { path: '', component: WorkItemsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkItemsRoutingModule { }
