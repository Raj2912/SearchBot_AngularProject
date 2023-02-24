import { Component } from '@angular/core';
import { CoreserviceService } from '../Services/coreservice.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  textboxValue: string = '';
  constructor( public coreService: CoreserviceService) {}

  onKey(event: any) { // without type info
    console.log(this.textboxValue)
  }
}
