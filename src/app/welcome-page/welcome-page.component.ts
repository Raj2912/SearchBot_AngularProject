import { Component } from '@angular/core';
import { CoreserviceService } from '../Services/coreservice.service';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  textboxValue: string = '';
  constructor(  private http: HttpClient, public coreService: CoreserviceService) {}

  onKey(event: any) { 
    console.log(event)
    let responseObserver = this.http.get('http://localhost:8000/search/?search=' +this.textboxValue);
    responseObserver.subscribe(() => {});
    console.log(this.textboxValue)
  }

  // saveUrl(){
  //     let saveresponse = this.http.post('http://localhost:8000/save/' + this.textboxValue);
  //     saveresponse.subscribe(()=> {});
  //     console.log(this.textboxValue)
  // }

  public saveData(data: Data): Observable<any> {
    const url = 'http://localhost:8000/save/';
    return this.http.post<any>(url, data);
    console.log(data)
  }
  

}



