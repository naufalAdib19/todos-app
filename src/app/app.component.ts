import { Component } from '@angular/core';
import { TopbarComponent } from './components/organisms/topbar/topbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'notes-app';
  notifyOptions: {} = {
    position: ['top', 'right'],
  };
}
