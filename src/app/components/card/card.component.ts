import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() description: string = "";
  @Input() image: string = "";
  @Input() id: number = 0;

  @Output() doClick = new EventEmitter();

  constructor() { }

  Click(id: number){
    console.log(id)
    this.doClick.emit(id);
  }

}
