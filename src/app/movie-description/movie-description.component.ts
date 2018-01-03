import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {

  public movieID: String;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['movID']) {
        this.movieID = params['movID'];
        console.log(this.movieID);
      } else {
        this.router.navigate(['home']);
      }
    });
  }

  ngOnInit() {
  }

}
