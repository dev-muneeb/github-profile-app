import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../app/profile';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private subject = new Subject<any>();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }



  sendSearch(username: string) {
    this.subject.next({ username });
  }

  clearSearch() {
    this.subject.next();
  }

  getSearch() {
    return this.subject.asObservable();
  }

  /** GET profile by username. **/
  getProfile(username): Observable<Profile> {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get<Profile>(url);
  }
}
