import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private _elementRef: ElementRef) { }

  public ngOnInit(): void {
    (<HTMLElement> this._elementRef.nativeElement).style.backgroundColor = 'green';
  }
}
