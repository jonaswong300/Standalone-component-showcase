import { Component } from '@angular/core';
import { ParentComponentComponent } from './parent-component/parent-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ParentComponentComponent],
  standalone: true
})
export class AppComponent {
  title = 'angular-14';
}
