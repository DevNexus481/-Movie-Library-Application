// DOM Elements
const titleEl = document.getElementById("title");
const genreEl = document.getElementById("genre");
const descriptionEl = document.getElementById("description");
const posterEl = document.getElementById("poster");
const addMovieEl = document.getElementById("addMovie");
const moviesEl = document.getElementById("movies");

let movies = [];

// Event Listeners
addMovieEl.addEventListener("click", addMovie);

// Functions
function addMovie() {
  const title = titleEl.value.trim();
  const genre = genreEl.value.trim();
  const description = descriptionEl.value.trim();
  const poster = posterEl.value.trim();

  if (title && genre && description && poster) {
    const movie = {
      id: generateId(),
      title,
      genre,
      description,
      poster,
    };

    movies.push(movie);
    updateDOM();
    clearInputs();
  } else {
    alert("Please fill in all fields.");
  }
}

function generateId() {
  return Math.floor(Math.random() * 1000000);
}

function updateDOM() {
  moviesEl.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    movieEl.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div>
                <h4>${movie.title}</h4>
                <p><strong>Genre:</strong> ${movie.genre}</p>
                <p>${movie.description}</p>
            </div>
            <button class="delete-btn" onclick="removeMovie(${movie.id})">x</button>
        `;

    moviesEl.appendChild(movieEl);
  });
}

function removeMovie(id) {
  movies = movies.filter((movie) => movie.id !== id);
  updateDOM();
}

function clearInputs() {
  titleEl.value = "";
  genreEl.value = "";
  descriptionEl.value = "";
  posterEl.value = "";
}

// Initialize
updateDOM();
