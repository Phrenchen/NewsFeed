import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-bubble',
  templateUrl: './feed-bubble.component.html',
  styleUrls: ['./feed-bubble.component.css']
})
export class FeedBubbleComponent implements OnInit {

  @Input() counter: number;

  constructor() { }

  ngOnInit() {
  }

}
