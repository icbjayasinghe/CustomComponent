import { Directive, NgModule,ElementRef,HostListener,Input,DoCheck,Optional } from '@angular/core';
import {NgModel} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Directive({
  selector: '[appInput]',
  host: {
    '[class.ui-inputtext]': 'true',
    '[class.ui-corner-all]': 'true',
    '[class.ui-state-default]': 'true',
    '[class.ui-widget]': 'true',
    '[class.ui-state-filled]': 'filled'
}
})
export class InputDirective implements DoCheck {

  filled: boolean;

    constructor(public el: ElementRef, @Optional() public ngModel: NgModel) {}
        
    ngDoCheck() {
        this.updateFilledState();
    }
    
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    @HostListener('input', ['$event']) 
    onInput(e) {
        this.updateFilledState();
    }
    
    updateFilledState() {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
                        (this.ngModel && this.ngModel.model);
    }

}

@NgModule({
  imports: [CommonModule],
  exports: [InputDirective],
  declarations: [InputDirective]
})
export class InputTextModule { }
