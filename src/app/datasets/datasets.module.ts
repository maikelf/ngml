import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasetsRoutingModule } from './datasets-routing.module';
import { DatasetsListComponent } from './datasets-list/datasets-list.component';

@NgModule({
  declarations: [DatasetsListComponent],
  imports: [
    CommonModule,
    DatasetsRoutingModule
  ]
})
export class DatasetsModule { }
