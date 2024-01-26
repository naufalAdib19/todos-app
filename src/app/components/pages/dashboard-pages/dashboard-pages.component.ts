import { Component } from '@angular/core';
import { SidebarComponent } from '../../organisms/sidebar/sidebar.component';
import { TopbarComponent } from '../../organisms/topbar/topbar.component';

@Component({
  selector: 'dashboard-pages',
  templateUrl: './dashboard-pages.component.html',
  styleUrl: './dashboard-pages.component.css',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent],
})
export class DashboardPagesComponent {}
