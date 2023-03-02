import { Component } from '@angular/core';
import { CoreserviceService } from '../Services/coreservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  textboxValue: string = '';
  constructor(  private http: HttpClient, public coreService: CoreserviceService) {}

  onKey(event: any) { 
    let responseObserver = this.http.get('http://localhost:8000/search/?search=raj');
    responseObserver.subscribe(() => {});
    console.log(this.textboxValue)
  }
}
