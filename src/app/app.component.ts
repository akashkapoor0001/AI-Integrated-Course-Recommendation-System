import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recommendationForm: FormGroup;
  recommendations: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.recommendationForm = this.fb.group({
      interests: ['', Validators.required],
      degree: ['', Validators.required],
      goals: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.recommendationForm.valid) {
      const payload = this.recommendationForm.value;
      this.http.post('http://localhost:3000/recommend', payload).subscribe(
        (response: any) => {
          this.recommendations = response.courses;
        },
        (error) => {
          console.error('Error fetching recommendations:', error);
        }
      );
    }
  }
}