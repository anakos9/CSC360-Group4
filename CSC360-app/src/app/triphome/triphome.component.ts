import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Trip } from '../trip';
import { TripService} from '../trip.service';

@Component({
  selector: 'app-triphome',
  templateUrl: './triphome.component.html',
  styleUrls: ['./triphome.component.css']
})
export class TriphomeComponent implements OnInit {
  mytrip: Trip;

  constructor(private route: ActivatedRoute,
              private tripService: TripService) { }

  ngOnInit() {
    this.getTrip();
  }
  getTrip(): void {
    const tripName = this.route.snapshot.paramMap.get('tripName');
    this.tripService.getTrip(tripName)
      .subscribe(trip => this.mytrip = trip);
  }
}
