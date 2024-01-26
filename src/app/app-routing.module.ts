import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPagesComponent } from './components/pages/dashboard-pages/dashboard-pages.component';
import { AddNotePagesComponent } from './components/pages/add-note-pages/add-note-pages.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPagesComponent,
  },
  {
    path: 'add-notes',
    component: AddNotePagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
