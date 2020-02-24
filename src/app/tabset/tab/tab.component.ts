import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent {

  @Input() heading: string;
  @Input() active: boolean = false;
}