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
  @Input() color: string = 'red';
  @Input() message: string = 'This field is mandatory';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['message']) {
      const newMessage = changes['message']?.currentValue;
      this.htmlElement.nativeElement.innerText = newMessage;
    }
    if (changes['color']) {
      const newColor = changes['color']?.currentValue;
      this.htmlElement.nativeElement.style.color = newColor;
    }
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.message;
  }
}
