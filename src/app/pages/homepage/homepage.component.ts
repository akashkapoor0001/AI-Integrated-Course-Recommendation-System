import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  userName: string = 'User';

  constructor(private router: Router) {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.userName = JSON.parse(userData).email.split('@')[0]; // Extract username from email
    }
  }
}
