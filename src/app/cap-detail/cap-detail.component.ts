import { Component, OnInit, Input } from '@angular/core';
import { Cap } from '../cap';

@Component({
  selector: 'app-cap-detail',
  templateUrl: './cap-detail.component.html',
  styleUrls: ['./cap-detail.component.css']
})
export class CapDetailComponent implements OnInit {

  @Input() cap?: Cap;

  constructor() { }

  ngOnInit(): void {
  }

}
