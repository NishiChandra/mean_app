import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetRetailDataService {
  url:string = 'http://localhost:3000/api/retail';
  constructor(private http:HttpClient) { }
  retreiveData():Observable<string[]>{
    return this.http.get<string[]>(this.url);
  }
}
