import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DescribeService {
  url:string = 'http://localhost:3000/api/desc';

  constructor(private http:HttpClient) { }
  description():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
