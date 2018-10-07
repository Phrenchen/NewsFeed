import { Component, enableProdMode, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'news-feed';
  user;


  constructor() {
    // enableProdMode();
  }

  ngOnInit() {
  }

}
