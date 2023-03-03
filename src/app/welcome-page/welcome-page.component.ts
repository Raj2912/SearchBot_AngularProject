import { Component } from '@angular/core';
import { CoreserviceService } from '../Services/coreservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  textboxValue: string = '';
  constructor(  private http: HttpClient, public coreService: CoreserviceService) {}

  SearchUrl(searchText: any) { 
    let responseObserver = this.http.get('http://localhost:8000/search/?search='+searchText);
    responseObserver.subscribe(() => {});
    console.log(this.textboxValue)
  }


  SaveUrl(saveText: any) { 
    let saveresponse = this.http.get('http://localhost:8000/save/?save='+saveText);
    saveresponse.subscribe(() => {});
    console.log(this.textboxValue)
  }



  
}
