/* ========================================
   SONG LIST
======================================== */

const songs = [

    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: "4:21",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

    {
        title: "Save Your Tears",
        artist: "The Weeknd",
        duration: "3:35",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },

    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        duration: "3:53",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },

    {
        title: "Perfect",
        artist: "Ed Sheeran",
        duration: "4:23",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },

    {
        title: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        duration: "2:21",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },

    {
        title: "Levitating",
        artist: "Dua Lipa",
        duration: "3:23",
        image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },

    {
        title: "As It Was",
        artist: "Harry Styles",
        duration: "2:47",
        image: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?w=600",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
    },

    {
        title: "Someone You Loved",
        artist: "Lewis Capaldi",
        duration: "3:02",
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    },

    {
        title: "Havana",
        artist: "Camila Cabello",
        duration: "3:37",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
    },

    {
        title: "Believer",
        artist: "Imagine Dragons",
        duration: "3:24",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
    }

];


/* ========================================
   GET HTML ELEMENTS
======================================== */

const audio = document.getElementById("audio");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const album = document.getElementById("album");

const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const progress = document.getElementById("progress");

const volume = document.getElementById("volume");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const playlist = document.getElementById("playlist");
const songCount = document.getElementById("songCount");

const autoplay = document.getElementById("autoplay");

const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");


/* ========================================
   VARIABLES
======================================== */

let songIndex = 0;

let isShuffle = false;

let isRepeat = false;


/* ========================================
   LOAD SONG
======================================== */

function loadSong(index) {

    const song = songs[index];

    title.textContent = song.title;

    artist.textContent = song.artist;

    album.src = song.image;

    audio.src = song.src;

    duration.textContent = song.duration;

    progress.value = 0;

    updatePlaylist();
}


/* ========================================
   PLAY SONG
======================================== */

function playSong() {

    audio.play();

    playBtn.textContent = "⏸";

    album.classList.add("playing");
}


/* ========================================
   PAUSE SONG
======================================== */

function pauseSong() {

    audio.pause();

    playBtn.textContent = "▶";

    album.classList.remove("playing");
}


/* ========================================
   PLAY / PAUSE
======================================== */

playBtn.addEventListener("click", () => {

    if (audio.paused) {

        playSong();

    } else {

        pauseSong();

    }

});


/* ========================================
   NEXT SONG
======================================== */

function nextSong() {

    if (isShuffle) {

        let randomIndex;

        do {

            randomIndex =
                Math.floor(
                    Math.random() * songs.length
                );

        } while (randomIndex === songIndex);

        songIndex = randomIndex;

    } else {

        songIndex++;

        if (songIndex >= songs.length) {

            songIndex = 0;

        }

    }

    loadSong(songIndex);

    playSong();
}


nextBtn.addEventListener("click", nextSong);


/* ========================================
   PREVIOUS SONG
======================================== */

prevBtn.addEventListener("click", () => {

    songIndex--;

    if (songIndex < 0) {

        songIndex = songs.length - 1;

    }

    loadSong(songIndex);

    playSong();

});


/* ========================================
   PROGRESS BAR
======================================== */

audio.addEventListener("timeupdate", () => {

    if (!audio.duration) return;

    const percentage =
        (audio.currentTime / audio.duration) * 100;

    progress.value = percentage;

    currentTime.textContent =
        formatTime(audio.currentTime);

});


/* ========================================
   SEEK SONG
======================================== */

progress.addEventListener("input", () => {

    if (!audio.duration) return;

    audio.currentTime =
        (progress.value / 100) *
        audio.duration;

});


/* ========================================
   VOLUME
======================================== */

audio.volume = 0.8;

volume.addEventListener("input", () => {

    audio.volume = volume.value;

});


/* ========================================
   AUTOPLAY
======================================== */

audio.addEventListener("ended", () => {

    if (isRepeat) {

        audio.currentTime = 0;

        playSong();

        return;

    }

    if (autoplay.checked) {

        nextSong();

    } else {

        pauseSong();

        progress.value = 0;

    }

});


/* ========================================
   SHUFFLE
======================================== */

shuffleBtn.addEventListener("click", () => {

    isShuffle = !isShuffle;

    shuffleBtn.style.color =
        isShuffle ? "#ff2020" : "#ddd";

});


/* ========================================
   REPEAT
======================================== */

repeatBtn.addEventListener("click", () => {

    isRepeat = !isRepeat;

    repeatBtn.style.color =
        isRepeat ? "#ff2020" : "#ddd";

});


/* ========================================
   CREATE PLAYLIST
======================================== */

function updatePlaylist() {

    playlist.innerHTML = "";

    songCount.textContent =
        songs.length + " Songs";


    songs.forEach((song, index) => {

        const item =
            document.createElement("div");

        item.classList.add("song");


        if (index === songIndex) {

            item.classList.add("active");

        }


        item.innerHTML = `

            <div class="song-number">
                ${index + 1}
            </div>

            <div class="song-details">

                <strong>
                    ${song.title}
                </strong>

                <span>
                    ${song.artist}
                </span>

            </div>

            <div class="song-duration">
                ${song.duration}
            </div>

        `;


        item.addEventListener("click", () => {

            songIndex = index;

            loadSong(songIndex);

            playSong();

        });


        playlist.appendChild(item);

    });

}


/* ========================================
   FORMAT TIME
======================================== */

function formatTime(seconds) {

    if (isNaN(seconds)) {

        return "0:00";

    }

    const minutes =
        Math.floor(seconds / 60);

    const secondsPart =
        Math.floor(seconds % 60);

    return (
        minutes +
        ":" +
        (secondsPart < 10 ? "0" : "") +
        secondsPart
    );

}


/* ========================================
   KEYBOARD CONTROLS
======================================== */

document.addEventListener("keydown", (event) => {

    if (event.code === "Space") {

        event.preventDefault();

        if (audio.paused) {

            playSong();

        } else {

            pauseSong();

        }

    }


    if (event.code === "ArrowRight") {

        nextSong();

    }


    if (event.code === "ArrowLeft") {

        prevBtn.click();

    }

});


/* ========================================
   INITIALIZE PLAYER
======================================== */

loadSong(songIndex);