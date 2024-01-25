import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPagesComponent } from './components/pages/dashboard-pages/dashboard-pages.component';
import { SidebarComponent } from './components/organisms/sidebar/sidebar.component';
import { TopbarComponent } from './components/organisms/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPagesComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
