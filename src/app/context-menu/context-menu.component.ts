import { Component, OnInit, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';
import ContextActionTarget from './ContextActionTarget';
import { element } from '@angular/core/src/render3/instructions';
import ContextMenuConsts from './ContextMenuConsts';


const TARGET_DETAILS_SHORT = 'app-details-short';
const TARGET_DETAILS_LONG = 'app-details-long';
const TARGET_DETAILS_TEASER = 'app-details-teaser';
const TARGET_IMAGE_CARD = 'app-image-card';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit, AfterViewInit {

  @Output() actionSelected: EventEmitter<string> = new EventEmitter<string>();

  private actions = [
    {
      action: ContextMenuConsts.ACTION_DELETE,
      validTargets: [TARGET_DETAILS_SHORT, TARGET_DETAILS_LONG, TARGET_DETAILS_TEASER, TARGET_IMAGE_CARD]
    },
    {
      action: ContextMenuConsts.ACTION_CLONE,
      validTargets: []
    },
    {
      action: ContextMenuConsts.ACTION_MARK,
      validTargets: []
    }
  ];


  private showDelay = 660;    // delay from mouseDown to showMenu
  private showDelayTimeout: any;

  constructor() { }

  ngOnInit(): void {

  }

  // called by view
  public isActionEnabled(actionName: string): boolean {
    if (!this.isValidAction(actionName)) {
      return false;
    }

    let show = false;

    switch (actionName) {
      case ContextMenuConsts.ACTION_DELETE:
        show = this.actions.find(action => action.action === actionName).validTargets.includes(ContextMenuConsts.ACTION_DELETE);
        break;
      default: show = true;
    }
    return show;
  }

  ngAfterViewInit() {
    if (document.querySelector('#action-delete')) {
      document.querySelector('#action-delete').addEventListener('mouseup' , (e) => {
        console.log('selected action: delete');
        this.actionSelected.emit('delete');
      });
    }

    if (document.querySelector('#action-clone')) {
      document.querySelector('#action-clone').addEventListener('mouseup' , (e) => {
        console.log('selected action: clone');
        this.actionSelected.emit('clone');
      });
    }

    if (document.querySelector('#action-mark')) {
      document.querySelector('#action-mark').addEventListener('mouseup' , (e) => {
        console.log('selected action: mark');
        this.actionSelected.emit('mark');
      });
    }

    window.onmousedown = e => {
      if (this.isNoMenuButton(e.target as HTMLElement)) {

        // show menu after a small delay, enabling 'normal-duration-mouse-downs' to count as clicks
        this.updateActionMenuPosition(e.clientX, e.clientY);
        this.toggleMenu();
      }
    };

      window.onmouseup = e => {
        this.cancelDelayedMenu();
    };

    window.onmousemove = e => {
      if (this.menu.style.display === 'none') {
        this.updateActionMenuPosition(e.clientX, e.clientY);
      }
    };

    this.showMenu(false);   // initially hide menu
  }

  private isNoMenuButton(candidate: HTMLElement) {
    return candidate !== document.querySelector('#action-delete') &&
      candidate !== document.querySelector('#action-clone') &&
      candidate !== document.querySelector('#action-mark');
  }

  private cancelDelayedMenu(): void {
    clearTimeout(this.showDelayTimeout);
    this.showDelayTimeout = -1;
    // this.showmenu(false);
  }

  private showMenuDelayed(show: boolean): void {
      // toggle buttons depending on target type.

      // show menu after a small delay, enabling 'normal-duration-mouse-downs' to count as clicks
      // save timeoutId to cancel the call onMouseUp
      this.showDelayTimeout = setTimeout(() => {
        this.showDelayTimeout = -1;
        this.showMenu(show);
      }, this.showDelay);
  }

  private isValidAction(action): boolean {
      return this.actions.find(a => a.action === action) !== null;
  }

  private get menu() {
    return document.querySelector('#actionmenu') as HTMLDivElement;
  }

  private get isMenuDisplayed(): boolean {
    return this.menu.style.display === 'grid';
  }

  private toggleMenu(): void {
    if (this.isMenuDisplayed) {
      this.showMenu(false);
    } else {
      this.showMenuDelayed(true);
    }
  }

  private showMenu(mouseIsDown) {
    if (this.menu) {
      this.menu.style.display = mouseIsDown ? 'grid' : 'none';
    }
  }

  private updateActionMenuPosition(x: number, y: number) {
        if (this.menu) {
            const xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
            const yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            const gapToMouseX = 10;
            const gapToMouseY = 10;
            const finalX = (x - this.menu.offsetWidth * .5) + xOffset + gapToMouseX;
            const finalY = (y - this.menu.offsetHeight * .5) + yOffset + gapToMouseY;

            this.menu.style.left = finalX + 'px';
            this.menu.style.top = finalY + 'px';
        }
}
}
