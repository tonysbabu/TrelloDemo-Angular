
import {Component, Input} from "@angular/core";
import {Card} from "./Card";

@Component({
  selector:'card',
  templateUrl:'app/CardComponent.html'
})
export class CardComponent {

  @Input() currentCard:Card;

  addItem(value:String){
    this.currentCard.listItems.push(value);
  }

}
