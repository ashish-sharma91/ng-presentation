import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  data: any = 'Something';
  subject = new ReplaySubject();
  message = this.subject.asObservable();
  constructor() { }

  send(data: {data: any, from: string, to: string, extra?: any}){
    this.subject.next(data);
  }
}
