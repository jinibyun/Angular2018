import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './testComponents/home/home.component';
import { SeventhExampleComponent } from './testComponents/seventhExample/seventhExample.component';
import { EigthExampleComponent } from './testComponents/eigthExample/eigthExample.component';


const routes : Routes = [
  { path : '', component:HomeComponent},
  { path : 'users', component:SeventhExampleComponent},
  { path : 'posts', component:EigthExampleComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
