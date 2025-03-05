import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recommend-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule], // ✅ Added HttpClientModule
  templateUrl: './recommend-courses.component.html',
  styleUrls: ['./recommend-courses.component.css'],
})
export class RecommendCoursesComponent {
  recommendForm: FormGroup;
  recommendedCourses: any[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.recommendForm = this.fb.group({
      interests: ['', Validators.required],
      degree: ['', Validators.required],
      cgpa: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      level: ['beginner', Validators.required],
    });
  }

  onSubmit() {
    if (this.recommendForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.recommendedCourses = [];

    const formData = this.recommendForm.value;

    this.http.post<{ courses: any[] }>('http://localhost:3000/recommend', formData).subscribe({
      next: (response) => {
        this.recommendedCourses = response.courses;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching recommendations:', error);
        this.errorMessage = 'Failed to fetch recommendations. Please try again later.';
        this.isLoading = false;
      }
    });
  }
}
