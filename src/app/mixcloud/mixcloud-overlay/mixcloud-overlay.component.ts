import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Cloudcast } from '../model/Cloudcast';
import { MixcloudService } from '../mixcloud.service';

@Component({
  selector: 'app-mixcloud-overlay',
  templateUrl: './mixcloud-overlay.component.html',
  styleUrls: ['./mixcloud-overlay.component.css']
})
export class MixcloudOverlayComponent implements OnInit {

  @Input() cloudcast: Cloudcast;

  @Output() closeMe: EventEmitter<any> = new EventEmitter<any>();


  protected isLoading = false;




  constructor(private mixcloudService: MixcloudService) { }

  ngOnInit() {
  }

  public closeOverlay(): void {
    this.closeMe.emit();
  }
}
