import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messengernav',
  templateUrl: './messengernav.component.html',
  styleUrls: ['./messengernav.component.scss']
})
export class MessengernavComponent {

  messages: string[];

  constructor(private routerService:Router){
    this.messages = ['killan','design','ahmed'];
  }

  navigate(url:string) {
    this.routerService.navigate(['/' + url]);
  }
}
