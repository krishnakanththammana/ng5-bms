import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  people: any[] = [
    {
      'name': 'Douglas  Pace'
    },
    {
      'name': 'Mcleod  Mueller'
    },
    {
      'name': 'Day  Meyers'
    },
    {
      'name': 'Aguirre  Ellis'
    },
    {
      'name': 'Cook  Tyson'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
