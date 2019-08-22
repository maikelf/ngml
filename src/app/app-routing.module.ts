import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: 'home',
    redirectTo: '/'
  },
  {
    path: 'datasets',
    loadChildren: './datasets/datasets.module#DatasetsModule'
  },
  {
    path: 'projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'work-items',
    loadChildren: './work-items/work-items.module#WorkItemsModule'
  },
  {
    path: 'predictions',
    loadChildren: './predictions/predictions.module#PredictionsModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
