import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponent } from './testComponents/firstExample/first.component';
import { SecondComponentsComponent} from './testComponents/secondComponents/secondComponents.component';
import { ThirdExampleComponent } from './testComponents/thirdExample/thirdExample.component';
import { FourthExampleComponent } from './testComponents/fourthExample/fourthExample.component'; // navigation
import { FifthExampleComponent } from './testComponents/fifthExample/fifthExample.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentsComponent,
    ThirdExampleComponent,
    FourthExampleComponent,
    FifthExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
