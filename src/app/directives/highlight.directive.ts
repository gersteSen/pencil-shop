import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    // Set the transition property for smooth background color change
    this.el.nativeElement.style.transition = 'background-color 0.3s ease';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.cursor = color ? 'pointer' : 'default';
    this.el.nativeElement.style.fontWeight = color ? 'bold' : 'normal';
  }
}
