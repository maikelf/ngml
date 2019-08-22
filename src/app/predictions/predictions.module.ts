import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PredictionsRoutingModule } from './predictions-routing.module';
import { PredictionsListComponent } from './predictions-list/predictions-list.component';

@NgModule({
  declarations: [PredictionsListComponent],
  imports: [
    CommonModule,
    PredictionsRoutingModule
  ]
})
export class PredictionsModule { }
