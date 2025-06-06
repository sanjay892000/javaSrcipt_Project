const token = "9d988e0c218e446a9502a399a98ffb36";
const FetchSongFun = () => {
    fetch("https://api.spotify.com/v1/search?q=arijit+singh&type=track&limit=5", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Tracks:", data.tracks.items);
          data.tracks.items.forEach((track) => {
            console.log("🎵", track.name);
            console.log("▶️", track.preview_url);
          });
        })
        .catch((err) => console.error("Error fetching from Spotify:", err));

}
FetchSongFun()



/* document.querySelector('#play').addEventListener('click',()=>{
    audioTag.play()
    console.log(audioTag.volume=0.5);
    setInterval(()=>{
        console.log(audioTag.currentTime)
        },1000)
        }) */
/* 
document.querySelector('#pause').addEventListener('click',()=>{
 audioTag.pause()
 }) */

let playbtn = document.querySelector('#playbtn');
let songProgress = document.querySelector('#songtime');
let musicDuration = document.querySelector('#duration');
let musicTime = document.querySelector('#music-time');
let audioTag = document.createElement('audio');
let songimg = document.querySelector('#songimg');
const playSongfun = () => {
    audioTag.src = './music/chand_taro_main.mp3'
    document.body.appendChild(audioTag);
    console.log(audioTag)
    musicDuration.innerHTML = '00:00';
    musicTime.innerHTML = '00:00';
    songProgress.value = 0;
    songProgress.min = 0;
    songProgress.max = audioTag.duration;
}
window.addEventListener('load', playSongfun)
playbtn.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-play')) {
        e.target.classList.remove('fa-play')
        e.target.classList.add('fa-pause')
        audioTag.play()
        songimg.classList.toggle('songimage')
        songProgress.max = audioTag.duration;
        musicDuration.innerHTML = `${Math.floor(audioTag.duration / 60).toString().padStart(2, '0')}:${Math.floor(audioTag.duration % 60).toString().padStart(2, '0')}`;

        setInterval(() => {
            songProgress.value = audioTag.currentTime
            musicTime.innerHTML = `${Math.floor(audioTag.currentTime / 60).toString().padStart(2, '0')}:${Math.floor(audioTag.currentTime % 60).toString().padStart(2, '0')}`;
            if (audioTag.ended) {
                e.target.classList.remove('fa-pause');
                e.target.classList.add('fa-play');
                songimg.classList.remove('songimage');
                audioTag.currentTime = 0;
            }
        }, 1000);
    }
    else {
        e.target.classList.remove('fa-pause')
        e.target.classList.add('fa-play')
        audioTag.pause()
        songimg.classList.toggle('songimage')
    }
}
)

document.querySelector('#stopbtn').addEventListener('click', () => {
    audioTag.pause()
    playbtn.classList.remove('fa-pause')
    playbtn.classList.add('fa-play')
    audioTag.currentTime = 0
    if(songimg.classList.contains('songimage')){
        songimg.classList.remove('songimage')
    }
})

document.querySelector('#songtime').addEventListener('change', (e) => {
    console.log(e);
    audioTag.currentTime = e.target.value;
})


