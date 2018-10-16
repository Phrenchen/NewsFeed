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
  public actionCloneEnabled = false;
  public actionMarkEnabled = false;
  public selectedTarget: HTMLElement;

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
      this.showmenu(true);
      this.updateActionMenuPosition(e.clientX, e.clientY);
    };

    window.onmouseup = e => {
      // always hide menu on mouseUp?
      this.showmenu(false);
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
            const finalX = (x - this.menu.offsetWidth * .5);
            const finalY = (y - this.menu.offsetHeight * .5);

            this.menu.style.left = finalX + 'px';
            this.menu.style.top = finalY + 'px';
        }
}
}
