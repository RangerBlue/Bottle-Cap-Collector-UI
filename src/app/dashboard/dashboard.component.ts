import { Component, OnInit } from '@angular/core';
import { Cap } from '../cap';
import { CapService } from '../cap.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  caps: Cap[] = [];

  constructor(private capService: CapService) { }

  ngOnInit(): void {
    this.getCaps();
  }

  getCaps(): void {
    this.capService.getCaps()
      .subscribe(caps => this.caps = caps.slice(1, 5));
  }
}
