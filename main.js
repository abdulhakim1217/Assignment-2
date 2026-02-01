// Movie Discovery App - Search functionality with Watchlist
const apiKey = '36093bfa';
let watchlist = []; // Array to store watchlist movies

// Event listener for search button
document.getElementById('search-button').addEventListener('click', searchMovies);

// Event listener for theme toggle
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
