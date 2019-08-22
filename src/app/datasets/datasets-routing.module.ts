import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatasetsListComponent } from './datasets-list/datasets-list.component';

const routes: Routes = [
  { path: '', component: DatasetsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatasetsRoutingModule { }
