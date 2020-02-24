import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabsetModule } from './tabset/tabset.module';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    TabsetModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
