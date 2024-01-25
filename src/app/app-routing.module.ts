import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPagesComponent } from './components/pages/dashboard-pages/dashboard-pages.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardPagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
