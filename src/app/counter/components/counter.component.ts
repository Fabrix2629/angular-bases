import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>CONTADOR CON ANGULAR</h1>
    <H3>COUNTER: {{ counter }}</H3>

    <button (click)="incrementOrDecrement(+1) " class="btn btn-primary mx-2">AUMENTAR</button>
    <button (click)="resetNumber()" class="btn btn-primary mx-2">Resert</button>
    <button (click)="incrementOrDecrement(-1)" class="btn btn-primary mx-2">RESTAR</button>
  `
})

export class CounterComponent  {
  public counter:number = 10;
  incrementOrDecrement(value:number):void{
    this.counter +=value;
  }

  resetNumber(){
    this.counter= 10;
  }

}
