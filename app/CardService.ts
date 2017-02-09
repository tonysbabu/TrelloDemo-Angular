
import {Card} from "./Card";
import {Injectable} from "@angular/core";

@Injectable()
export  class CardService{

  cardList:Array<Card> = [];

  addCard(header:String){
    this.cardList.push(new Card(header));


  }

  getCardList(){
    return this.cardList;
  }
}
