import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './predict-form.component.html',
  styleUrls: ['./predict-form.component.css']
})
export class PredictFormComponent {
  formData = {
    gender: '',
    ethnicity: '',
    parental_level_of_education: '',
    lunch: '',
    test_preparation_course: '',
    reading_score: 0,
    writing_score: 0
  };

  prediction: string = '';
  showModal: boolean = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('http://13.201.23.154:5000/api', this.formData).subscribe({
      next: (res) => {
        this.prediction = `Your predicted marks is: ${res.prediction}`;
        this.showModal = true;
      },
      error: () => {
        this.prediction = 'Error occurred while predicting.';
        this.showModal = true;
      }
    });
  }

  resetForm() {
    this.formData = {
      gender: '',
      ethnicity: '',
      parental_level_of_education: '',
      lunch: '',
      test_preparation_course: '',
      reading_score: 0,
      writing_score: 0
    };
    this.prediction = '';
    this.showModal = false;
  }

  closeModal() {
    this.showModal = false;
  }
}
