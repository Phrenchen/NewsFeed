import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourite-bubble',
  templateUrl: './favourite-bubble.component.html',
  styleUrls: ['./favourite-bubble.component.css']
})
export class FavouriteBubbleComponent implements OnInit {

  @Input() counter: number;

  constructor() { }

  ngOnInit() {
  }

}
