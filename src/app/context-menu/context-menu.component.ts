import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import ContextActionTarget from './ContextActionTarget';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit, AfterViewInit {

  @Output() targetSelected: EventEmitter<ContextActionTarget> = new EventEmitter<ContextActionTarget>();

  private actions = ['food', 'guard', 'enemy'];

  public actionDeleteEnabled = true;
  public actionCloneEnabled = true;
  public actionMarkEnabled = false;
  public selectedTarget: HTMLElement;

  private showDelayTimeout = -1;
  private showDelay = 660;    // 660 delay from mouseDown to showMenu

  constructor() { }

  ngOnInit(): void {

  }

  private emitAction(target: HTMLElement, action: string): void {
    this.targetSelected.emit({
      target: target,
      action: action
    });
  }

  ngAfterViewInit() {
    if (document.querySelector('#action-delete')) {
      document.querySelector('#action-delete').addEventListener('mouseup' , (e) => {
        this.emitAction(this.selectedTarget, 'delete');
      });
    }

    if (document.querySelector('#action-clone')) {
      document.querySelector('#action-clone').addEventListener('mouseup' , (e) => {
        this.emitAction(this.selectedTarget, 'clone');
      });
    }

    if (document.querySelector('#action-mark')) {
      document.querySelector('#action-mark').addEventListener('mouseup' , (e) => {
        this.emitAction(this.selectedTarget, 'mark');
      });
    }

    window.onmousedown = e => {
      // console.log(e.target);
      this.selectedTarget = e.target as HTMLElement;

      // toggle buttons depending on target type.
      this.actionDeleteEnabled = this.selectedTarget.tagName ===  'IMG';

      // show menu after a small delay, enabling "normal-duration-mouse-downs" to count as clicks
      // save timeoutId to cancel the call onMouseUp
      this.showDelayTimeout = window.setTimeout(() => {
        this.showmenu(true);
      }, this.showDelay);
      this.updateActionMenuPosition(e.clientX, e.clientY);
    };

    window.onmouseup = e => {
      // always hide menu on mouseUp?
      if (this.showDelayTimeout !== -1) {
        window.clearTimeout(this.showDelayTimeout);
        this.showDelayTimeout = -1;
      }
      this.showmenu(false);
    };

    window.onmousemove = e => {
      if (this.menu.style.display === 'none') {
        this.updateActionMenuPosition(e.clientX, e.clientY);
      }
    };

    this.showmenu(false);   // initially hide menu
  }

  private isValidAction(action): boolean {
      return this.actions.indexOf(action) !== -1;
  }

  private get menu() {
    return document.querySelector('#actionmenu') as HTMLDivElement;
  }

  private showmenu(mouseIsDown) {
    if (this.menu) {
      this.menu.style.display = mouseIsDown ? 'grid' : 'none';
    }
  }

  private updateActionMenuPosition(x: number, y: number) {
        if (this.menu) {
            const xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
            const yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            const finalX = (x - this.menu.offsetWidth * .5) + xOffset;
            const finalY = (y - this.menu.offsetHeight * .5) + yOffset;

            this.menu.style.left = finalX + 'px';
            this.menu.style.top = finalY + 'px';
        }
}
}
