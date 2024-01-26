import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Router } from '@angular/router';
import {
  ionChevronForwardOutline,
  ionSunnyOutline,
  ionListOutline,
} from '@ng-icons/ionicons';

@Component({
  selector: 'by-date-lists',
  templateUrl: './by-date-lists.component.html',
  styleUrl: './by-date-lists.component.css',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({ ionChevronForwardOutline, ionSunnyOutline, ionListOutline }),
  ],
})
export class ByDateListsComponent {
  constructor(private router: Router) {}

  getPath(): String {
    return this.router.url;
  }
}
