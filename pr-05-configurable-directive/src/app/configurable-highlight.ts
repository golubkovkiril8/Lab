import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightColor]',
  standalone: true,
})
export class ConfigurableHighlightDirective {
  @Input('highlightColor') highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setBackground(this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setBackground('');
  }

  private setBackground(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
