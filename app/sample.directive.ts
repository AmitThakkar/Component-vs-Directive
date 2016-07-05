/**
 * Created by amitthakkar on 05/07/16.
 */

import {Directive} from "@angular/core";

@Directive({
    selector: '[enter]',
    host: {
        '(keypress)': 'enterHandler($event)'
    }
})
export class EnterDirective {
    constructor() {
    }

    enterHandler(event) {
        if (event.keyCode == 13) {
            console.log('Enter pressed');
        }
    }
}