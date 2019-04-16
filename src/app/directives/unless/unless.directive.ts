import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
// tslint:disable-next-line: no-unsafe-any
  @Input() public set appUnless(condition: boolean) {
    if (!condition) {
      this._vcRef.createEmbeddedView(this._templateRef);
    } else {
      this._vcRef.clear();
    }
  }
  constructor(
// tslint:disable-next-line: no-any
    private _templateRef: TemplateRef<any>,
    private _vcRef: ViewContainerRef,
  ) { }

}
