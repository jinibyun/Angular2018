import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './testComponents/firstExample/first.component';
import { SecondComponentsComponent} from './testComponents/secondComponents/secondComponents.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
