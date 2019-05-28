import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetSalesDataService {
  url:string = 'http://localhost:3000/api/sales';
  constructor(private http:HttpClient) { }
  salesData():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
