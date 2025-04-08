# 🎓 Student Performance Predictor

An AI-powered web application that predicts a student's math score based on demographic information and academic performance using a machine learning model.

---

## 🧰 Tech Stack

- **Frontend**: Angular (TypeScript)
- **Backend**: Flask (Python)
- **Model**: Linear Regression (Trained using scikit-learn)

---

## 📌 Features

- 🔮 Predict student performance using machine learning
- 🧾 Input form to collect demographic and academic data
- 💡 Modal popup to show prediction result clearly
- 🖼️ Responsive and styled UI
- 💻 Integrated frontend and backend communication

---

## 🧠 ML Model Details

- **Algorithm**: Linear Regression
- **Trained On**: Student performance dataset
- **Inputs**:
  - Gender
  - Ethnicity
  - Parental Level of Education
  - Lunch Type
  - Test Preparation Course
  - Reading Score
  - Writing Score
- **Output**: Predicted Math Score
- **Tools Used**: scikit-learn, pandas, pickle

---

## 🏁 How to Run This Project Locally

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-performance-predictor.git
cd student-performance-predictor
```

### 🔹 2. Setup & Run Flask Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

✅ Flask will start at: `http://localhost:5000`

### 🔹 3. Setup & Run Angular Frontend

```bash
cd frontend
npm install
ng serve
```

✅ Angular app will start at: `http://localhost:4200`

---

## 📡 API Details

### 🔸 Endpoint

**POST** `/predict` → Full URL: `http://localhost:5000/predict`

### 🔸 Request Example

```json
{
  "gender": "Male",
  "ethnicity": "Group A",
  "parental_education": "Some College",
  "lunch": "Standard",
  "test_preparation": "Completed",
  "reading_score": 68,
  "writing_score": 42
}
```

### 🔸 Response Example

```json
{
  "predicted_score": 53.44
}
```

---

## 💡 UI Preview

Add real screenshots in your repository in `frontend/src/assets/screenshots/` and link them below.

| User Input Form | Prediction Modal |
|----------------|------------------|
| [Screenshot 1] | [Screenshot 2]   |

---

## 📁 File Structure (Simplified)

```
student-performance-predictor/
├── backend/
│   ├── app.py
│   ├── model.pkl
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── student-form/
│   │   └── assets/screenshots/
│   └── angular.json
└── README.md
```

---

## 📦 Sample `requirements.txt` (Backend)

```
Flask==2.3.2
scikit-learn==1.3.0
pandas==2.0.3
numpy==1.25.2
```

---

## 🛠️ Sample `app.py` (Backend)

```python
from flask import Flask, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_data = [
        data['gender'],
        data['ethnicity'],
        data['parental_education'],
        data['lunch'],
        data['test_preparation'],
        data['reading_score'],
        data['writing_score']
    ]
    # Encode categorical features and format input for model here
    # For example only (not functional without preprocessing):
    prediction = model.predict([input_data])[0]
    return jsonify({'predicted_score': round(prediction, 2)})

if __name__ == '__main__':
    app.run(debug=True)
```

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss what you'd like to change.