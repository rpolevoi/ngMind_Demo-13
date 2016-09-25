import { Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-child-component',
  template: `<h3>The following number is a child component property bound to input from the parent component property</h3>
            <h3>{{childProp}}</h3>
            <ng-content></ng-content>`,
  styleUrls: ['child.component.css']
})
export class ChildComponent {
  
  @Input() childProp;
  
}
