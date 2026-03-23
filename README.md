# 🏡 Real Estate Web Application

A full-stack real estate platform built with **Django REST Framework (DRF)** for the backend and **React** for the frontend. The application allows users to browse, search, and manage property listings efficiently.

---

## 🚀 Features

* User authentication (login/register)
* Create, read, update, and delete property listings (CRUD)
* Advanced property search and filtering
* RESTful API for seamless frontend-backend communication
* Responsive user interface

---

## 🛠️ Tech Stack

### **Backend**

* Django
* Django REST Framework (DRF)
* PostgreSQL / MySQL

### **Frontend**

* React
* HTML, CSS, JavaScript

### **Tools**

* Git & GitHub
* VS Code

---

## 📂 Project Structure

```
real_estate_app1/
│
├── backend/        # Django + DRF API
├── frontend/       # React application
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/michieka499/real-estate-app1.git
cd real-estate-app1
```

---

### 2. Backend Setup (Django + DRF)

```
cd backend
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

### 3. Frontend Setup (React)

```
cd frontend
npm install
npm start
```

---

## 🔗 API Endpoints (Examples)

* `GET /api/properties/` → List all properties
* `POST /api/properties/` → Create property
* `GET /api/properties/{id}/` → Retrieve property
* `PUT /api/properties/{id}/` → Update property
* `DELETE /api/properties/{id}/` → Delete property

---

---

## 📈 Future Improvements

* Add payment integration
* Implement real-time chat between buyers and sellers
* Deploy application (AWS)
* Add property image uploads

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Michieka Maxwell Ochego**

* GitHub: https://github.com/michieka499


---
