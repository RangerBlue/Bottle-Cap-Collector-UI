import { Component, OnInit } from '@angular/core';
import { Cap } from '../cap';
import { CAPS } from '../mock-caps';

@Component({
  selector: 'app-caps',
  templateUrl: './caps.component.html',
  styleUrls: ['./caps.component.css']
})
export class CapsComponent implements OnInit {

  cap: Cap = {
    id: 1,
    name: "Perla"
  }

  caps = CAPS;

  selectedCap?: Cap;
  onSelect(cap: Cap): void {
    this.selectedCap = cap;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
