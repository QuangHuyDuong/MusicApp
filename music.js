let musicList = [
    {
        name : 'song0',
        artist : 'artist0',
        img : 'img0',
        src : 'audio0'
    },
    {
        name : 'song1',
        artist : 'artist1',
        img : 'img1',
        src : 'audio1'
    },
    {
        name : 'song2',
        artist : 'artist2',
        img : 'img2',
        src : 'audio2'
    },
    {
        name : 'song3',
        artist : 'artist3',
        img : 'img3',
        src : 'audio3'
    }
]
var songDetails = document.querySelector(".song")
var songName = songDetails.querySelector('.song-name')
var artist = songDetails.querySelector('.artist')
var currentSong = document.querySelector('.my-audio')
var currentIndex = 0;
var isPlayed = false;
var progressBar = document.querySelector('.progress-bar')


var myAudio= document.querySelector(".my-audio"); 


//load songs

function loadSong(index){
    
    
    songName.innerHTML = musicList[index].name
    artist.innerHTML = musicList[index].artist
}
// load song at first
window.addEventListener('load',() =>{
    document.querySelector(".play-pause").innerHTML = `<i onclick="playAudio()" class="fas fa-play"></i>`
    progressBar.style.width = '0%'
    
    loadSong(0)
  
  
})





// play or pause the music


function playAudio() { 
  isPlayed = true;
  
  myAudio.play(); 
  document.querySelector(".play-pause").innerHTML = ` <i onclick="pauseAudio()" class="fas fa-pause"></i>`
  
  
} 

function pauseAudio() { 
    isPlayed = false
  myAudio.pause(); 
  document.querySelector(".play-pause").innerHTML = `<i onclick="playAudio()" class="fas fa-play"></i>`
} 
// Next, previous song
function nextSong(){
    currentIndex++;
    currentIndex < musicList.length ? currentIndex = currentIndex : currentIndex = 0
    loadSong(currentIndex)
    currentSong.setAttribute("src",`asset/music/1/song${currentIndex}.mp3`)
    
}
function previousSong(){
    currentIndex--;
    currentIndex >= 0 ? currentIndex = currentIndex : currentIndex = musicList.length -1 
    loadSong(currentIndex)
    currentSong.setAttribute("src",`asset/music/1/song${currentIndex}.mp3`)
}
document.querySelector(".next").addEventListener('click',()=>{
   nextSong()
   if(isPlayed) {
       playAudio()
       document.querySelector(".play-pause").innerHTML = ` <i onclick="pauseAudio()" class="fas fa-pause"></i>`
    }
})
document.querySelector(".previous").addEventListener('click',() =>{
    previousSong()
    if(isPlayed){
          playAudio()
          document.querySelector(".play-pause").innerHTML = ` <i onclick="pauseAudio()" class="fas fa-pause"></i>`
    }    
})

//progress bar

myAudio.addEventListener('timeupdate',()=> {
    var currentTime = myAudio.currentTime
    
    var durationTime = myAudio.duration
    
    var percent = (currentTime/durationTime)*100
    progressBar.style.width = `${percent}%`
 
   
})




