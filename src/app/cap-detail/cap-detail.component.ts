import { Component, OnInit, Input } from '@angular/core';
import { Cap } from '../cap';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CapService } from '../cap.service';

@Component({
  selector: 'app-cap-detail',
  templateUrl: './cap-detail.component.html',
  styleUrls: ['./cap-detail.component.css']
})
export class CapDetailComponent implements OnInit {

  @Input() cap?: Cap;

  constructor(
    private route: ActivatedRoute,
    private capService: CapService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCap()
  }


  getCap(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.capService.getCap(id)
      .subscribe(cap => this.cap = cap);
  }

  goBack(): void {
    this.location.back();
  }

}
