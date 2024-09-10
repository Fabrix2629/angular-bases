import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName:string[]=['Hulk','Spiderman','She Hulk','Thor','Ironman'];

  public deleteHero?:string;

  removeLasHero():void{
    this.deleteHero = this.heroName.pop();
  }
}

