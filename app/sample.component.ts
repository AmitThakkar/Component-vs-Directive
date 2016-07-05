/**
 * Created by amitthakkar on 5/07/16.
 */
import {Component} from '@angular/core';
import {EnterDirective} from "./sample.directive";

@Component({
    selector: 'sample-component',
    template: `
       <strong>Hello World</strong> form <strong>{{name}} Component</strong>!
       <br/>
       <input type="text" enter>
    `,
    directives: <any>[EnterDirective]
})
export class SampleComponent {
    name:string = 'Sample';
}