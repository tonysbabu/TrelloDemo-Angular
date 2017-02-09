import {Component} from "@angular/core";
import {CardService} from "./CardService";
import {Card} from "./Card";

@Component({
  selector:'card-list',
  templateUrl:'app/CardListComponent.html'

})
export class CardListComponent{


  cardService:CardService;
  cardList:Array<Card>;

  constructor(cardService:CardService){
    this.cardService = cardService;
    this.cardList = this.cardService.getCardList();
  }

  addCard(value:String){
    this.cardService.addCard(value);

  }

}
