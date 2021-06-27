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

  selectedCap?: Cap;

  constructor(private capService: CapService, private messageService: MessageService) { }

  onSelect(cap: Cap): void {
    this.selectedCap = cap;
    this.messageService.add(`CapsComponent: Selected cap id=${cap.id}`);
  }

  ngOnInit(): void {
    this.getCaps();
  }

  getCaps(): void {
    this.capService.getCaps().subscribe(caps => this.caps = caps);
  }

}
