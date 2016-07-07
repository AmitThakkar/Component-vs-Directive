# Component v/s Directive

This blog explain difference between Component and Directive in Angular2.

In **Angular1** we used to **directive** for below reasons:
1. To add behavior to an existing DOM element.
2. To create a reusable component.

**Angular2** have introduced two different meta-data annotation for these, **@Directive** is used to add behaviour to a element, 
while **@Component** is used to create reusable component. Lets have a look below points for more details:

1. We create **Component** with the help of **@Component** meta-data annotation while We create **Directive** with the help of 
**@Directive** meta-data annotation.

2. **@Component** requires a view while **@Directive** does not.

3. **@Component** is used to create reusable components while **@Directive** is used to add behavior to an existing DOM element.

6. Example:


```TypeScript
import {Component} from '@angular/core';
import {EnterDirective} from "./sample.directive";

@Component({
    selector: 'sample-component',
    template: `
       <strong>Hello World</strong> form <strong>{{name}} Component</strong>!
       <br/>
       <input type="text" (enter)="enterHandler($event)" >
    `,
    directives: <any>[EnterDirective]
})
export class SampleComponent {
    name:string = 'Sample';

    enterHandler(event) {
        console.log(event);
    }
}
```

```TypeScript
import {Directive, Output} from "@angular/core";
import {EventEmitter} from "@angular/common/src/facade/async";

@Directive({
    selector: '[enter]',
    host: {
        '(keypress)': 'enterHandler($event)'
    }
})
export class EnterDirective {
    @Output() enter = new EventEmitter<any>();

    constructor() {
    }

    enterHandler(event) {
        if (event.keyCode == 13) {
            this.enter.emit(event);
        }
    }
}
```


Follow Me
---
[Github](https://github.com/AmitThakkar)

[Twitter](https://twitter.com/amit_thakkar01)

[LinkedIn](https://in.linkedin.com/in/amitthakkar01)

[More Blogs By Me](http://amitthakkar.github.io/)