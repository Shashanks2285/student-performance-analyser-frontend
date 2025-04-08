import { Component } from '@angular/core';
import { PredictFormComponent } from '../predict-form/predict-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PredictFormComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showForm = false; // ✅ Add this line to fix the error
}
