import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetStoresDataService {
  url:string = 'http://localhost:3000/api/stores';
  constructor(private http:HttpClient) { }
  getStoresData():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
