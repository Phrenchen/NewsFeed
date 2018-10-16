import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

  @Output() targetSelected: EventEmitter<any> = new EventEmitter<any>();

  private actions = ['food', 'guard', 'enemy'];

  private actionDeleteEnabled = true;
  private actionCloneEnabled = true;
  private actionMarkEnabled = true;

  constructor() { }

  ngOnInit() {

    window.onmousedown = e => {
      console.log(e);
      const target = this.getClickTarget(e);
      this.showmenu(true, e.target);
      this.updateActionMenuPosition(e.clientX, e.clientY);
    };

    window.onmouseup = e => {
      this.triggerMenuAction(e.target);

      // always hide menu?
      this.showmenu(false);
    };

    // window.onmousemove = e => {
      //   if (this.mouseIsDown) {
        //       // this.updateActionMenuPosition(e.clientX, e.clientY);
        //   }
        // };
    this.showmenu(false);   // initially hide menu
  }

  private getClickTarget(e: MouseEvent): any {
    /* search path for
        app-image-card
        app-details-short
        app-details-long
        app-details-teaser
    */
    const searchFor = [
      'app-image-card',
       'app-details-short',
       'app-details-long',
       'app-details-teaser'
    ];

    const path: Array<any> = e['path'];   // e.path not public? e.path gives erroR :/
    console.log(path ? 'length: ' + path.length : 'no path');

    // path.map( candidate => {
    //   console.log(candidate);
    // });

  }

  private isValidAction(action): boolean {
      return this.actions.indexOf(action) !== -1;
  }

  private triggerMenuAction(target) {
      const actionName = target.innerHTML.trim();

      if(this.isValidAction(actionName)) {
          console.log('triggering menu action for: ' + actionName);
          // handle selected action
      }
  }

  private get menu() {
    return document.querySelector('#actionmenu') as HTMLDivElement;
  }

  private showmenu(mouseIsDown, target = null) {
    if (this.menu) {
      // check if valid target (with enabled actions) is clicked
      if (mouseIsDown) {
        console.log(target);

      }

      this.menu.style.display = mouseIsDown ? 'grid' : 'none';
    }
  }

  private updateActionMenuPosition(x: number, y: number) {
        if (this.menu) {
            const finalX = (x - this.menu.offsetWidth * .5);
            const finalY = (y - this.menu.offsetHeight * .5);

            this.menu.style.left = finalX + 'px';
            this.menu.style.top = finalY + 'px';
        }
}
}
