# 🎬 Interactive Movie Search & Temporary Watchlist (Vanilla JS)

## 📌 Project Overview
This project is a **single-page movie discovery web application** built using **pure (vanilla) JavaScript**.  
It allows users to search for movies using the **OMDb API**, view interactive movie cards, add movies to a **temporary in-memory watchlist**, and switch between **light and dark mode** with smooth transitions.

The watchlist exists **only for the current browser session** and resets automatically when the page is refreshed.

---

## 🎯 Project Objectives
- Practice **DOM manipulation** and **event handling**
- Fetch and display data from a **remote API**
- Handle loading states and user-friendly errors
- Manage data using **JavaScript arrays**
- Dynamically update styles using `classList`
- Build a responsive and interactive UI without any frameworks

---

## 🚀 Features

### 🔍 Movie Search
- Search movies by title using the **OMDb API**
- Displays results as responsive movie cards
- Shows loading feedback while searching
- Handles errors such as:
  - No results found
  - Invalid API key
  - Network issues

### 🎴 Interactive Movie Cards
- Hover effects (scale & shadow)
- Click a card to view extra movie details:
  - Plot
  - IMDb rating
  - Actors
- Smooth transitions and fade-in animations

### ⭐ Temporary Watchlist (In-Memory)
- Add movies to a watchlist for the current session
- View watchlist in a separate section
- Remove movies from the watchlist
- Watchlist resets on page refresh (no local storage)

### 🌙 Light / Dark Mode
- Toggle between light and dark themes
- Uses `classList.toggle()` on the `body`
- Smooth color and background transitions

---

## 🛠️ Technologies Used
- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6+)**
- **OMDb API**

No frameworks or libraries were used.

---

## 📂 Project Structure
movie-explorer/
│
├── index.html # Main HTML structure
├── styles.css # Styling and dark mode
├── script.js # JavaScript logic
└── README.md # Project documentation


---

## 🔑 OMDb API Setup
To run this project, you need a **free OMDb API key**.

### Steps:
1. Visit: https://www.omdbapi.com/apikey.aspx
2. Fill the form and submit
3. Check your email and activate your API key
4. Open `script.js`
5. Replace:
   ```js
   const API_KEY = "YOUR_API_KEY_HERE";
with your actual API key

▶️ How to Run the Project
Download or clone this repository

Open the project folder

Open index.html in your browser

Enter a movie title and click Search

Interact with movie cards and manage your watchlist

No server or installation required.

📸 Screenshots (Optional)
Add screenshots here if required by the instructor.

⚠️ Limitations
Watchlist is not persistent

Data resets on page refresh

Free OMDb API has a request limit (~1,000/day)

👨‍🏫 Instructor
Sahabia Yakubu

🧑‍💻 Author
Abdul Karim

📄 License
This project is for educational purposes only.


---

If you want, I can:
- ✨ Shorten this to **one-page academic style**
- 🧪 Add a **features checklist** for marking
- 🏆 Tailor it to match your school’s submission format
- 📦 Generate a **GitHub-ready version with badges**

Just tell me 💪
