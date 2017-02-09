import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DndModule} from 'ng2-dnd';
import { Ng2SortableModule } from 'ng2-ui-sortable'


import { AppComponent }  from './app.component';
import {CardListComponent} from "./CardList.Component";
import {CardComponent} from "./Card.Component";
import {CardService} from "./CardService";

@NgModule({
  imports:      [ BrowserModule ,DndModule.forRoot(),Ng2SortableModule],
  declarations: [ AppComponent,CardListComponent,CardComponent ],
  providers:[CardService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
