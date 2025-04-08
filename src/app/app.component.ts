// import { Component } from '@angular/core';
// import { PredictFormComponent } from './predict-form/predict-form.component'; // ⬅️ Import this

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [PredictFormComponent], // ⬅️ Declare here
//   template: '<app-predict-form></app-predict-form>', // ⬅️ Inline template is fine
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'student-predictor';
// }
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; // Import the home component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent], // Use HomeComponent here instead
  template: '<app-home></app-home>', // Render the scrollable home
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-predictor';
}
