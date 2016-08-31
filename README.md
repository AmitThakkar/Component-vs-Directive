# Component v/s Directive

This blog explain difference between Component and Directive in **Angular2**.

In **Angular1** we use **directive** for below reasons:

1. To add behavior to an existing DOM element.
2. To create a component with attached behaviour.

**Angular2** have introduced two different meta-data annotation for these, First is **@Directive**, which is used to add behaviour 
to an existing element. Second is **@Component**, which is used to create a component with attached behaviour. For more difference 
and example have a look below points:

1. We create **Component** with the help of **@Component** meta-data annotation while we create **Directive** with the help of 
    **@Directive** meta-data annotation.

2. **@Component** is used to create new **View(Shadow DOM)** with attached behaviour while **@Directive** is used to add behavior 
    to an existing DOM element.

3. With the help of **@Component** we can break our application into small-2 components, and can do component base development
    while with the help of **@Directive** we can attached different-2 behaviours to an existing DOM element or different-2 
    existing DOM element.

4. **@Component** is used to create reusable components while **@Directive** is used to create reusable behaviour.

5. **@Component** requires a view via **@View** or **template/url** while **@Directive** does not.
    > **@View** or **template/url** is mandatory in the component.

6. Example:
    **@Component**
    ---
    
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
    
    **@Directive**
    ---
    
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

> Communication between **Component** and **Directive** can be same way as we do between two **Components**. 

Follow Me
---
[Github](https://github.com/AmitThakkar)

[Twitter](https://twitter.com/amit_thakkar01)

[LinkedIn](https://in.linkedin.com/in/amitthakkar01)

[More Blogs By Me](https://amitthakkar.github.io/)