import { Component } from '@angular/core';
import { ByDateListsComponent } from '../../molecules/by-date-lists/by-date-lists.component';
import { ByTypeListsComponent } from '../../molecules/by-type-lists/by-type-lists.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAddOutline, ionMenuOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone: true,
  imports: [ByDateListsComponent, ByTypeListsComponent, NgIconComponent],
  viewProviders: [provideIcons({ ionAddOutline, ionMenuOutline })],
})
export class SidebarComponent {}
