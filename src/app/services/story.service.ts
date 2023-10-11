import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  baseUrl = environment.baseUrl;
  
  constructor(private http:HttpClient) { }

  
  getStories(): Observable<any>{
    return this.http.get<any>(this.baseUrl + 'NewsStory');
  }
}
