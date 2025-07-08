import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
  imports:[CommonModule]
})
export class ValueComponent implements OnInit {

  values: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    this.http.get('http://localhost:5144/api/Values').subscribe({
      next: response=>this.values=response,
      error: error=>console.log(error),
    })
  }

}
