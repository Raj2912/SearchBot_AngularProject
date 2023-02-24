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

  ngOnInit(){
    console.log(this.textboxValue);
    // this.coreService.getData().subscribe(data => {
    //   console.log(data);
    // });
  }

  onKey(event: any) { // without type info
    this.textboxValue = event.target.value;
    console.log(this.textboxValue)
  }
}
