import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
interface PriceCard{
  id : Number,
  category : String,
  userType : String,
  amount : String,
  Validity : String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priceCards';
  priceCards:Array<PriceCard> = [
  {
    id : 1,
    category : 'FREE',
    userType : 'single user',
    amount : '$0/month',
    Validity : '15 days'
  },
  {
    id : 2,
    category : 'PLUS',
    userType : '5 Users',
    amount : '$9/month',
    Validity : '1 Year'
  },{
    id : 3,
    category : 'PRO',
    userType : 'Unlimited Users',
    amount : '$49/month',
    Validity : '5 Years'
  }
]

}
