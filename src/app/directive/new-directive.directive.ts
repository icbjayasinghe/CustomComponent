import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewDirective]'
})
export class NewDirectiveDirective {
  element: ElementRef;
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "green";
    this.element = el;
   }

   ngOnInit(){
    this.element.nativeElement.innerText = "its work"
   }

}
