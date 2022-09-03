import { Component } from '@angular/core';
import { UppercasePipe } from '../pipes/uppercase.pipe';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss'],
  standalone: true,
  imports: [UppercasePipe]
})
export class ChildComponentComponent {
}
