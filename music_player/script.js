/* 
const FetchSongFun = async () => {
    try {
        const response = await fetch('https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl?market=IN', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer 11dFghVXANMlKmJXsNCbNl',
            }
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }

}
FetchSongFun() */



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
    audioTag.src = './music/bestmusic.MP3'
    document.body.appendChild(audioTag);
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
                e.target.classList.remove('fa-pause')
                e.target.classList.add('fa-play')
                audioTag.currentTime = 0
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


