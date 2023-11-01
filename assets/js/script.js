// Define your playlist as an array of objects
const playlist = [

  {
    title: "Baroque Music",
    artist: "Various Artists",
    url: "assets/songs/baroque.mp3"
  },
  {
    title: "Music Track",
    artist: "Tido Kang",
    url: "assets/songs/3h.mp3"
  },
  {
    title: "Lofi chill 30 minutes",
    artist: "Various Artists",
    url: "assets/songs/chill2.mp3"
  },
  {
    title: "1 Hours Study",
    artist: "Piano",
    url: "assets/songs/onehour.mp3"
  },
  {
    title: "Playlist",
    artist: "Studio Ghibli",
    url: "assets/songs/STUDIOGHIBLI.mp3"
  },

];

// Display the playlist in the HTML
const songList = document.getElementById("songs");
playlist.forEach((song, index) => {
  const li = document.createElement("li");
  li.innerHTML = `${index + 1}. ${song.title} - ${song.artist}`;
  li.addEventListener("click", () => {
    audio.src = song.url;
    playPauseButton.innerHTML = '<i class="bi bi-pause"></i>';
    audio.play();
  });
  songList.appendChild(li);
});

// Define the audio player and initialize it with the first song
const audio = new Audio();
audio.src = playlist[0].url;
audio.play(); // play the first song automatically

// Define the play/pause button and add event listener
const playPauseButton = document.getElementById("playpause");
playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

audio.muted = false;

// Define the mute button and add event listener
const muteButton = document.getElementById("mute");
muteButton.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    muteButton.innerHTML = '<i class="bi bi-volume-mute-fill"></i>';

  } else {
    audio.muted = true;
    muteButton.innerHTML = '<i class="bi bi-volume-up-fill"></i>';
  }
});

// Define the time display and seek bar
const timeDisplay = document.getElementById("time-display");
const seekBar = document.getElementById("seek-bar");

// Update the time display and seek bar when the audio is playing
audio.addEventListener("timeupdate", () => {
  // Update the time display
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  const durationMinutes = Math.floor(audio.duration / 60);
  const durationSeconds = Math.floor(audio.duration % 60);
  timeDisplay.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? "0" : ""}${currentSeconds} / ${durationMinutes}:${durationSeconds < 10 ? "0" : ""}${durationSeconds}`;

  // Update the seek bar
  const progress = audio.currentTime / audio.duration;
  seekBar.value = progress * 100;
});

// Seek the audio when the user interacts with the seek bar
seekBar.addEventListener("input", () => {
  const progress = seekBar.value / 100;
  audio.currentTime = progress * audio.duration;
});

const soundCheckbox = document.getElementById('sound-checkbox');
const audio_1 = document.getElementById('my-audio');

soundCheckbox.addEventListener('change', function() {
  if (this.checked) {
    audio_1.play();
  } else {
    audio_1.pause();
    audio_1.currentTime = 0;
  }
});



