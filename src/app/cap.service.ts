import { Injectable } from '@angular/core';
import { Cap } from './cap'
import { CAPS } from './mock-caps'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CapService {

  constructor(private messageService: MessageService) { }

  getCaps(): Observable<Cap[]> {
    const caps = of(CAPS);
    this.messageService.add('CapService: fetched caps');
    return caps;
  }
}
