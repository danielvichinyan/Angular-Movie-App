import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  search() {
    const query = this.searchForm.value.query

    this.router.navigate([ 'movies/search' ], { queryParams: { search: query } })
  }
}
