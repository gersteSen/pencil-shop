import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appNativeButton]',
})
export class NativeButtonDirective {
  @HostBinding('class')
  private twClasses =
    'bg-sky-500 dark:bg-gray-400 hover:cursor-pointer p-4 hover:bg-sky-400 rounded-md';
}
