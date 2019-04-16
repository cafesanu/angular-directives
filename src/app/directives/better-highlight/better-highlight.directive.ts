import {Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() public defaultColor: string = 'transparent';

  @Input() public highlightColor: string = 'blue';

  @HostBinding('style.background') public backgroundColor: string;

  constructor(
    private _elementRef: ElementRef,
    private _rendered: Renderer2,
  ) {}

  public ngOnInit(): void {
    this.highlightColor = this.defaultColor;
  }

  // tslint:disable-next-line: no-unsafe-any
  @HostListener('mouseenter') public mouseenter(): void {
    this.backgroundColor = this.highlightColor;
    // this._rendered.setStyle(this._elementRef.nativeElement, 'background-color', this.highlightColor);
  }

  // tslint:disable-next-line: no-unsafe-any
  @HostListener('mouseleave') public mouseleave(): void {
    this.backgroundColor = this.defaultColor;
    // this._rendered.setStyle(this._elementRef.nativeElement, 'background-color', this.defaultColor);
  }

}
