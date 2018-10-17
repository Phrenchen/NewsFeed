import { Component } from '@angular/core';

export default interface ContextActionTarget {
    tagName: string;
    action: string;
    component: Component;
}
