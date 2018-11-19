import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FirstComponent } from './testComponents/firstExample/first.component';
import { SecondComponentsComponent} from './testComponents/secondComponents/secondComponents.component';
import { ThirdExampleComponent } from './testComponents/thirdExample/thirdExample.component';
import { FourthExampleComponent } from './testComponents/fourthExample/fourthExample.component'; // navigation
import { FifthExampleComponent } from './testComponents/fifthExample/fifthExample.component';
import { SixthExampleComponent } from './testComponents/sixthExample/sixthExample.component';
import { SeventhExampleComponent } from "./testComponents/seventhExample/seventhExample.component";
import { DataService } from './services/data.service';

import { PostService } from './services/post.service';

import { EigthExampleComponent } from './testComponents/eigthExample/eigthExample.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentsComponent,
    ThirdExampleComponent,
    FourthExampleComponent,
    FifthExampleComponent,
    SixthExampleComponent,
    SeventhExampleComponent,
    EigthExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
