// Placeholder if needed in future
console.log("Detail page loaded.");

const movies = {
  "perayaan-mati-rasa": {
    title: "Perayaan Mati Rasa",
    release: "2025",
    rating: 4.9,
    duration: "125 menit",
    genre: "Drama, Music",
    ageRate: "R 13+",
    synopsis: `Film ini menceritakan tentang Ian Antono yang selalu dibanding-bandingkan dengan adiknya, Uta Antono. Uta selalu memiliki kehidupan cemerlang sesuai keinginan kedua orangtuanya. Di sisi lain, Ian berusaha mengejar mimpinya dalam karier bermusik. Namun, Uta dan Ian kehilangan orangtua secara mendadak. Ia lalu berusaha untuk kuat dan mengubur semua perasaannya hingga mati rasa.`,
    cast: [
      "Iqbaal Ramadhan", "Umay Shahab", "Dwi Sasono",
      "Unique Priscilla", "Devano Danendra", "Dul Jaelani"
    ],
    poster: "images/PERAYAAN MATI RASA.png"
  }
};

// Get URL parameter
const urlParams = new URLSearchParams(window.location.search);
const movieKey = urlParams.get("title");

if (movieKey && movies[movieKey]) {
  const movie = movies[movieKey];

  document.getElementById("poster-img").src = movie.poster;

  document.getElementById("movie-info").innerHTML = `
    <li><strong>Category</strong>: Film</li>
    <li><strong>Title</strong>: ${movie.title}</li>
    <li><strong>Release</strong>: ${movie.release}</li>
    <li><strong>Rating</strong>: ⭐⭐⭐⭐⭐ / ${movie.rating}</li>
    <li><strong>Duration</strong>: ${movie.duration}</li>
    <li><strong>Genre</strong>: ${movie.genre}</li>
    <li><strong>Age rate</strong>: ${movie.ageRate}</li>
  `;

  document.getElementById("synopsis-text").innerText = movie.synopsis;

  const castList = document.getElementById("cast-list");
  movie.cast.forEach(actor => {
    const div = document.createElement("div");
    div.className = "actor";
    div.innerText = actor;
    castList.appendChild(div);
  });
} else {
  document.body.innerHTML = "<h1 style='color:white;text-align:center;'>Movie not found</h1>";
}

