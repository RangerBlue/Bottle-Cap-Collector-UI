import { Component, OnInit } from '@angular/core';
import { Cap } from '../cap';
import { CapService } from '../cap.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-caps',
  templateUrl: './caps.component.html',
  styleUrls: ['./caps.component.css']
})
export class CapsComponent implements OnInit {

  caps: Cap[] = [];

  constructor(private capService: CapService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCaps();
  }

  getCaps(): void {
    this.capService.getCaps().subscribe(caps => this.caps = caps);
  }

}
