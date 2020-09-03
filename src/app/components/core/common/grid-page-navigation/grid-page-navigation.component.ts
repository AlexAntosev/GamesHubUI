import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grid-page-navigation',
  templateUrl: './grid-page-navigation.component.html',
  styleUrls: ['./grid-page-navigation.component.scss']
})
export class GridPageNavigationComponent implements OnInit {
  baseUrl : string;
  pagesCount: number;

  constructor() { 
    this.baseUrl = "/top-games/pages";
    this.pagesCount = 4;
  }

  ngOnInit(): void {
  }

  getPagesCount() {
    return new Array(this.pagesCount);
  }
}
