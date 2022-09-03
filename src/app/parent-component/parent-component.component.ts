import { Component } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  standalone: true,
  imports: [ChildComponentComponent],
})
export class ParentComponentComponent{

}
