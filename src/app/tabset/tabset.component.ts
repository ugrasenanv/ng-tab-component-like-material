import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'ng-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.css']
})
export class TabsetComponent {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  select(tab: TabComponent): void {
    // deselect all tabs
    this.tabs.forEach(tab => tab.active = false);

    // select the clicked tab
    tab.active = true;
  }
}