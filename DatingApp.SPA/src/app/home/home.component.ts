import { Component, Input, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RegisterComponent, CommonModule]
})
export class HomeComponent implements OnInit {

  registerMode:boolean = false;
  values: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }
  CancelRegistrationMode(registerMode:boolean) {
    this.registerMode = registerMode;
    console.log('Registration mode cancelled');

  }
}
