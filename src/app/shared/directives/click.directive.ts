import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[click]'
})
export class ClickDirective {
  @HostBinding('style.cursor') cursor = 'pointer';
  @HostBinding('style.pointer-events') pointerEvents = 'auto';
  constructor() { }
}
