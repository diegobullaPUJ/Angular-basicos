import {Component} from '@angular/core';

@Component({
    selector: 'app-accountant',
    template: `
    <h1> {{ title }}</h1>

    <h3>La base es: <strong> {{ base }} </strong></h3>

    <button (click)="accumulate(-base)"> - {{base}} </button>

    <span> {{ number }} </span>

    <button (click)="accumulate(base)"> + {{base}} </button>
    `
})

export class AccountantComponent {

    title:string = 'Contador App';
    number: number = 0;
    base: number =10;
  
    accumulate( value:number ) {
      this.number +=value;
    }

}
