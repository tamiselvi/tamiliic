import { Component,Input, OnInit } from '@angular/core';

interface PriceCard{
  id : Number,
  category : String,
  userType : String,
  amount : String,
  Validity : String
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() priceCardData:PriceCard ={
    id : 0,
    category : '',
    userType : '',
    amount : '',
    Validity : ''
  }

  ngOnInit(): void {
  }

}
