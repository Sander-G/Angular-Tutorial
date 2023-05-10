import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  /* Every component requires a CSS selector. 
  A selector instructs Angular to instantiate this component 
  wherever it finds the corresponding tag in template HTML. 
  For example, consider a component hello-world.component.ts 
  that defines its selector as app-hello-world. 
  This selector instructs Angular to instantiate this component any
  time the tag <app-hello-world> appears in a template. */

  templateUrl: './first-component.component.html',
  /* An Angular component requires a template defined using template or templateUrl.
 You cannot have both statements in a component.
 
 voorbeeld van template ipv template Url: 
 template: `
    <h1>Hello World!</h1>
    <p>This template definition spans multiple lines.</p>
  `
  */

  styleUrls: ['./first-component.component.css']

  /* To declare the styles for a component in a separate file, add a styleUrls property to the @Component decorator.
  
  To declare the styles within the component, add a styles property to the @Component decorator that contains the styles you want to use.
 

  bijvoorbeeld: 
@Component({
  selector: 'app-component-overview',
  template: '<h1>Hello World!</h1>',
  styles: ['h1 { font-weight: normal; }']
})
The styles property takes an array of strings that contain the CSS rule declarations.
  
  
  */




})





export class FirstComponentComponent {

}
