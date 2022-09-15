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

  @Input() set color(value: string) {
    this.htmlElement.nativeElement.style.color = value;
    this._color = value;
  }
  @Input() set message(value: string) {
    this.htmlElement.nativeElement.innerHTML = value;
    this._message = value;
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    // this.setColor();
    // this.setMessage();
  }

  setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.message;
  }
}
