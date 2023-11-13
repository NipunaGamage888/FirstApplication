import { Component } from '@angular/core';
import {faBox} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faGift} from '@fortawesome/free-solid-svg-icons'
import {faBarcode} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  faBox=faBox
  faUser=faUser
  faGift=faGift
  faAddressCard=faBarcode
}
