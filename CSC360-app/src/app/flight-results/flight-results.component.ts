import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css']
})
export class FlightResultsComponent implements OnInit {
  default = 'Airlines';
  americanA = 'American Airlines';
  spirit = 'Spirit Airlines';
  united = 'United Airlines';
  delta = 'Delta Airlines';
  constructor() { }

  ngOnInit() {
  }

}
