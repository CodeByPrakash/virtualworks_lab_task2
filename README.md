# User Profile Card Generator

A form-based single-page application built with Flask that takes user input and generates a stylish, dynamic profile card. This project demonstrates handling POST requests, processing form data on the backend, and passing structured data back to the frontend to build dynamic UI components without page reloads.

## Features

- **Form Input:** A clean, intuitive form for users to enter their Full Name, Bio, and an Image URL.
- **Dynamic Profile Generation:** Upon submission, the app instantly generates and displays a premium profile card based on the user's input.
- **Asynchronous Data Handling:** Uses the Fetch API to submit form data to the Flask backend without a page refresh.
- **Backend Validation:** Basic backend checks to ensure all required fields are present before processing.
- **Premium Aesthetics:** Features a modern glassmorphism design, soft gradients, and subtle hover animations for a polished user experience.

## Technology Stack

- **Backend:** Python 3, Flask framework.
- **Frontend:** Vanilla HTML, CSS, and JavaScript.
- **Design Elements:** Google Fonts ('Outfit'), CSS gradients, and box-shadows.

## Project Structure

```
task_2/
├── app.py                 # The main Flask application and API routes
├── requirements.txt       # Python dependencies
├── static/
│   ├── app.js             # Client-side JavaScript (Fetch API, DOM manipulation)
│   └── style.css          # Styling for the application (modern UI)
└── templates/
    └── index.html         # Main HTML layout for the form and card container
```

## Setup and Installation

1. Ensure Python 3 is installed on your machine.
2. Navigate to the `task_2` directory in your terminal.
3. Install the required dependency (Flask):
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

1. From within the `task_2` directory, start the server:
   ```bash
   python app.py
   ```
2. By default, the application runs on port 5001 to avoid conflicts with other apps. Open your web browser and navigate to:
   [http://127.0.0.1:5001](http://127.0.0.1:5001)

## API Endpoints

- `GET /` - Renders the main user interface.
- `POST /api/generate-card` - Receives JSON payload `{"name": "...", "bio": "...", "image_url": "..."}`, validates the data, and returns the profile details.
