import { Injectable } from '@angular/core';
import { Log } from '../models/log';
@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs : Log[];

  constructor() { 
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:12:45')},
      {id: '2', text: 'Added bootstrap', date: new Date('12/22/2017 10:12:45')},
      {id: '3', text: 'Added logs component', date: new Date('12/21/2017 1:12:45')},
    ]
  }

  getLogs(){
    return this.logs;
  }
}
