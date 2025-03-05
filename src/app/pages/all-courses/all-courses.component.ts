import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css'],
})
export class AllCoursesComponent {
  courses = [
    { name: 'Web Development' },
    { name: 'Data Science' },
    { name: 'Machine Learning' },
    { name: 'Cyber Security' },
    { name: 'Cloud Computing' },
    { name: 'Artificial Intelligence' },
    { name: 'Blockchain Technology' },
    { name: 'UI/UX Design' },
    { name: 'Software Engineering' },
  ];
}
