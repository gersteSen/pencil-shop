import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHeading]',
})
export class HeadingDirective {
  @HostBinding('class')
  private twClass = 'monster-heading-6xl';
}
