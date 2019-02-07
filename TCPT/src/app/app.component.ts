import { Component, Injectable } from '@angular/core';
import { Resource } from './resource';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TCPT';
  public resources: any;
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5000/equipment')
                .subscribe(result => this.resources = result);
  }
}
