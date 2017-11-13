import { Component } from '@angular/core';
import { RopaService } from './services/ropa.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RopaService]
})
export class AppComponent {
  title = 'Webapp Angular4 with Cli';

  
}
