import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsetComponent } from './tabset.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsetComponent, TabComponent],
  exports: [TabsetComponent, TabComponent],
})
export class TabsetModule { }