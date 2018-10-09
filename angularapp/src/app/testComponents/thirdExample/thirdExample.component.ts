/*
1. generate component and ngInit
2. Template Syntax
*/

import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'; // call interface (manually create)
@Component({
  selector: 'app-thirdExample',
  templateUrl: './thirdExample.component.html',
  styleUrls: ['./thirdExample.component.css']
})
export class ThirdExampleComponent implements OnInit {  
  users:User[];
  showExtended : boolean = true;
  loaded:boolean = true; // mimi data loading
  // normally it is used with Dependency Injection
  constructor() { }

  // normally it is used with service call or initialization
  ngOnInit() {

    //setTimeout(() => {
      this.users = [
        {
          firstName : "John",
          lastName : "Doe",
          age: 30,
          address : {
            street: "120 King St",
            city: "Toronto",
            state: "ON"
          }
        },
        {
          firstName : "Kevin",
          lastName : "Johnson"          
        },
        {
          firstName : "Caren",
          lastName : "Williams",
          age: 26,
          address : {
            street: "123 yonge ave",
            city: "Manitoba",
            state: "MB"
          }
        }
      ]; 

      // test
      this.showExtended = true;
    //}, 2000 );

    this.addUser({
      firstName : "David",
        lastName : "Jackson",
        age: 12,
        address : {
          street: "345 Mill ave",
          city: "Montreal",
          state: "QC"
        }
    });
  }

  addUser(user:User){
    this.users.push(user);
  }
}
