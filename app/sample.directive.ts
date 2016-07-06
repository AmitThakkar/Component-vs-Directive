/**
 * Created by amitthakkar on 05/07/16.
 */

import {Directive, Output} from "@angular/core";
import {EventEmitter} from "@angular/common/src/facade/async";

@Directive({
    selector: '[enter]',
    host: {
        '(keypress)': 'enterHandler($event)'
    }
})
export class EnterDirective {
    @Output() onEnter = new EventEmitter<any>();

    constructor() {
    }

    enterHandler(event) {
        if (event.keyCode == 13) {
            this.onEnter.emit(event);
        }
    }
}