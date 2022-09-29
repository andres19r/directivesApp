import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red'
  private _message: string = 'This field is required'

  // this @Input set only triggers if the property changes
  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }
  @Input() set message(value: string) {
    this._message = value;
    this.setMessage();
  }
  @Input() set valid(value: boolean) {
    if (value === true) {
      this.htmlElement.nativeElement.classList.add('hidden')
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden')
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setStyle();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }
}
