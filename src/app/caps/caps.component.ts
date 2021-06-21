import { Component, OnInit } from '@angular/core';
import { Cap } from '../cap';

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

  constructor() { }

  ngOnInit(): void {
  }

}
