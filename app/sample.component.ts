/**
 * Created by amitthakkar on 5/07/16.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'sample-component',
    template: `
       <strong>Hello World</strong> form <strong>{{name}} Component</strong>!
    `
})
export class SampleComponent {
    name:string = 'Sample';
}