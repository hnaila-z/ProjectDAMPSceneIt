// Placeholder if needed in future
console.log("Detail page loaded.");

const movies = {
  "perayaan-mati-rasa": {
    category: "Film",
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
  },

  "world-war-z": {
    category: "Film",
    title: "World War Z",
    release: "2013",
    rating: 4.4,
    duration: "116 menit",
    genre: "Action Horror",
    ageRate: "R 13+",
    synopsis: `Film ini menceritakan tentang Gerry Lane yang hidup damai bersama istri dan dua anaknya. Namun, kehidupan mereka berubah drastis ketika wabah misterius menyebar, mengubah manusia menjadi zombie agresif. Gerry yang sebelumnya seorang penyelidik PBB, dipanggil kembali untuk mencari solusi atas wabah yang mengancam kehidupan umat manusia. Dalam perjalanannya, ia harus berhadapan dengan berbagai negara yang terancam, termasuk Korea Selatan, Israel, dan Wales, sambil berusaha menyelamatkan keluarganya. Ia berjuang keras untuk menemukan jawaban yang dapat menghentikan pandemi global ini, meskipun harus mengorbankan perasaannya demi menyelamatkan dunia.`,
    cast: [
      "Brad Pitt", "Mireille Enos", "Daniella Kartesz", "Fana Mokoena", "James Badge Dale", "Matthew Fox"
    ],
    poster: "images/WORLD WAR Z.png"
  },

  "the-hobbit-the-battle-of-the-five-armies": {
    category: "Film",
    title: "THE HOBBIT : THE BATTLE OF THE FIVE ARMIES",
    release: "2014",
    rating: 4.7,
    duration: "144 menit",
    genre: "Fantasy, Adventure",
    ageRate: "R 13+",
    synopsis: `Film ini melanjutkan kisah petualangan Bilbo Baggins setelah mereka berhasil merebut Gunung Sepuluh dan harta karun yang dijaga oleh naga Smaug. Namun, kemenangan mereka menimbulkan konflik besar antara para Dwarf, Elf, dan manusia yang ingin mengklaim harta tersebut. Sementara itu, ancaman yang lebih besar datang dari pasukan Orc yang berencana untuk menghancurkan segala sesuatu di jalan mereka. Bilbo, bersama dengan teman-temannya, harus berjuang untuk mempertahankan Gunung Sepuluh dan melawan pasukan yang datang dari berbagai arah, dalam pertempuran epik yang akan menentukan masa depan Middle-earth.`,
    cast: [
      "Ian McKellen", "Martin Freeman", "Richard Armitage", "Cate Blanchett", "Orlando Bloom", "Luke Evans"
    ],
    poster: "images/THE HOBBIT - THE BATTLE OF THE FIVE ARMIES.png"
  },

  "adolescence": {
    category: "Series",
    title: "ADOLESCENCE",
    release: "2025",
    rating: 4.2,
    duration: "65 menit",
    genre: "Criminal",
    ageRate: "R 13+",
    synopsis: `Film menceritakan tentang keluarga Miller yang dunianya berubah drastis ketika putra mereka yang berusia 13 tahun, Jamie Miller, ditangkap atas tuduhan membunuh seorang teman sekelas perempuan. Setiap episode disajikan dalam satu take panjang, menghadirkan pengalaman menonton yang intens dan mendalam. Serial ini mengeksplorasi dampak dari insiden tersebut terhadap keluarga Jamie, serta upaya detektif dan psikolog dalam mengungkap kebenaran di balik tragedi tersebut.`,
    cast: [
      "Owen Cooper", "Stephen Graham", "Christine Tremarco", "Ashley Walters", "Erin Doherty", "Faye Marsay"
    ],
    poster: "images/ADOLESCENCE.png"
  },

  "enola-holmes-2": {
    category: "Film",
    title: "ENOLA HOLMES 2",
    release: "2022",
    rating: 4.5,
    duration: "130 menit",
    genre: "Mystery, Adventure",
    ageRate: "D 16+",
    synopsis: `Film ini menceritakan tentang Enola Holmes, seorang detektif muda yang membuka agensi detektif sendiri setelah sukses memecahkan kasus pertamanya. Meskipun baru, Enola menghadapi tantangan besar dalam mendapatkan klien. Suatu hari, seorang gadis dari pabrik korek api memintanya untuk menyelidiki hilangnya saudara perempuannya. Enola kemudian terjebak dalam konspirasi besar yang melibatkan korupsi industri dan perjuangan buruh perempuan. Dalam perjalanannya, Enola bekerja sama dengan kakaknya, Sherlock Holmes, yang tengah menangani kasusnya sendiri. Bersama, mereka berusaha mengungkap kebenaran di balik hilangnya Sarah Chapman dan misteri besar yang mengancam.`,
    cast: [
      "Millie Bobby Brown", "Henry Cavill", "Louis Partridge", "Helena Bonham Carter", "David Thewlis", "Sharon Duncan-Brewster"
    ],
    poster: "images/ENOLA HOLMES 2.png"
  },

  "enola-holmes": {
    category: "Film",
    title: "ENOLA HOLMES",
    release: "2020",
    rating: 4.8,
    duration: "123 menit",
    genre: "Mystery, Adventure",
    ageRate: "D 16+",
    synopsis: `Film ini menceritakan tentang Enola Holmes, adik perempuan dari detektif terkenal Sherlock Holmes. Ketika ibu Enola, Eudoria, menghilang secara misterius, Enola memutuskan untuk mencari ibunya sendiri, meskipun usianya masih muda dan belum berpengalaman. Dalam pencariannya, Enola menghadapi berbagai tantangan, termasuk melawan berbagai hambatan yang coba menahan langkahnya. Selama petualangannya, Enola bertemu dengan seorang pemuda bernama Viscount Tewkesbury, yang juga terlibat dalam konspirasi besar. Sementara itu, Sherlock yang terkenal dan lebih berpengalaman berusaha untuk menemukan ibunya dengan caranya sendiri, tetapi Enola bertekad untuk membuktikan bahwa dia bisa menjadi detektif hebat dengan caranya sendiri.`,
    cast: [
      "Millie Bobby Brown", "Henry Cavill", "Louis Partridge", "Helena Bonham Carter", "Sam Claflin", "Fiona Shaw"
    ],
    poster: "images/ENOLA HOLMES.png"
  },

  "my-stupid-boss": {
    category: "Film",
    title: "MY STUPID BOSS",
    release: "2016",
    rating: 4.6,
    duration: "108 menit",
    genre: "Comedy",
    ageRate: "R 13+",
    synopsis: `Film ini menceritakan Diana, seorang wanita asal Indonesia yang mengikuti suaminya pindah ke Kuala Lumpur. Untuk mengisi waktu, Diana menerima tawaran bekerja sebagai sekretaris di sebuah perusahaan milik teman suaminya, yang dikenal dengan julukan "Bossman" (Reza Rahadian). Namun, Bossman memiliki gaya kepemimpinan yang unik dan sering kali tidak masuk akal, membuat Diana harus menghadapi berbagai situasi absurd dan menantang dalam pekerjaannya. Meski demikian, Diana belajar banyak tentang kesabaran dan toleransi, serta menemukan sisi kemanusiaan Bossman yang tidak terduga`,
    cast: [
      "Reza Rahardian", "Bunga Citra Lestari", "Alex Abbad", "Bront Palarae", "Chew Kin Wah", "Atikah Suhaime"
    ],
    poster: "images/MY STUPID BOSS.png"
  },

  "agak-laen": {
    category: "Film",
    title: "AGAK LAEN",
    release: "2024",
    rating: 4.9,
    duration: "90 menit",
    genre: "Comedy, Horror",
    ageRate: "R 13+",
    synopsis: `Film menceritakan empat sahabat—Bene, Jegel, Boris, dan Oki—yang bekerja sebagai penjaga rumah hantu di sebuah pasar malam. Bisnis mereka sepi karena rumah hantu yang mereka kelola dianggap tidak cukup menyeramkan. Mereka pun memutuskan untuk merenovasi rumah hantu agar lebih menakutkan. Namun, sebuah insiden terjadi ketika seorang pengunjung meninggal dunia akibat serangan jantung setelah terkejut. Keempat sahabat ini berusaha menyembunyikan kejadian tersebut dengan mengubur mayatnya di dalam rumah hantu. Tanpa disadari, rumah hantu mereka menjadi viral dan semakin banyak dikunjungi, namun mereka juga mulai diteror oleh arwah pengunjung yang meninggal tersebut .`,
    cast: [
      "Boris Bokir", "Indra Jegel", "Bene Dion", "Oki Rengga", "Tissa Biani", "Indah Permatasari"
    ],
    poster: "images/AGAK LAEN.png"
  }
};

// Get URL parameter
const urlParams = new URLSearchParams(window.location.search);
const movieKey = urlParams.get("title");

if (movieKey && movies[movieKey]) {
  const movie = movies[movieKey];

  document.getElementById("poster-img").src = movie.poster;

  document.getElementById("movie-info").innerHTML = `
    <li><strong>Category</strong>: ${movie.category}</li>
    <li><strong>Title</strong>: ${movie.title}</li>
    <li><strong>Release</strong>: ${movie.release}</li>
    <li><strong>Rating</strong>: ⭐ ${movie.rating} / 5</li>
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

document.querySelectorAll('.reply-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const box = this.closest('.review').querySelector('.reply-box');
    box.classList.toggle('hidden');
  });
});

document.querySelectorAll('.report-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const modal = this.closest('.review').querySelector('.report-modal');
    modal.classList.toggle('hidden');
  });
});


