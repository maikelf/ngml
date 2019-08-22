import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkItemsRoutingModule } from './work-items-routing.module';
import { WorkItemsListComponent } from './work-items-list/work-items-list.component';

@NgModule({
  declarations: [WorkItemsListComponent],
  imports: [
    CommonModule,
    WorkItemsRoutingModule
  ]
})
export class WorkItemsModule { }
