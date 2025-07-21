import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  imports: [FormsModule,CommonModule]
})
export class NavComponent implements OnInit {
  model:any = {};
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  login(){
    this.authService.login(this.model).subscribe(
      next=>{
        console.log('Login successful');
      },error=>{
        console.error('Login failed', error);
      }
    )
  }
  loggedIn(){
    const token=localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}
