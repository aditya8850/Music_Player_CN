const songs = [
    {
        id: 1,
        name: "Time",
        artist: "Nf",
        img: "thumbnails/NF-Time.webp",
        genre: "hiphop",
        source: "audioSRC/nf-time.mp3",
    }
    ,
    {
        id: 2,
        name: "Heaven",
        artist: "Eminem",
        img: "thumbnails/Eminem-Heaven.webp",
        genre: "hiphop",
        source: "audioSRC/eminem-heaven.mp3",
    }
    ,
    {
        id: 3,
        name: "Neurotica",
        artist: "Polyphia",
        img: "thumbnails/polyphia-pg",
        genre: "metal",
        source: "audioSRC/polyphia-neurotica.mp3",
    }
    ,
    {
        id: 4,
        name: "Without me",
        artist: "halsey ft Juice Wrld",
        img: "thumbnails/Without-Me.png",
        genre: "pop",
        source: "audioSRC/without-me.mp3",
    }
    ,
    {
        id: 5,
        name: "All time low",
        artist: "jon Bellion",
        img: "thumbnails/All-Time-Low.png",
        genre: "pop",
        source: "audioSRC/all-time-low.mp3",
    }
    ,


]



let currentSongIndex = 0;
const listOfSongs = document.querySelector('.list-inside');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn= document.querySelector('.play-prev');

showSongsAll();

// Function to show songs
function showSongsAll() {
    // Clear the list of songs before appending new ones
    listOfSongs.innerHTML = '';

    songs.forEach((song) => {
        const pInLists = document.createElement('p');
        pInLists.classList.add('cursor-pointer');
        pInLists.innerHTML = `${song.artist}: ${song.name}`;
        listOfSongs.appendChild(pInLists);

        pInLists.addEventListener('click', function (e) {
            currentSongIndex = songs.indexOf(song); // Update the current song index
            playSong(currentSongIndex);
        });
    });
    playSong(0)
}

// Function to play the current song
function playSong(index) {
    const song = songs[index];
    const thumbnail = document.querySelector(".thumbnail-song");
    thumbnail.src = song.img;

    const name = document.querySelector('#current-song');
    name.innerHTML = song.name;

    const audio = document.querySelector('.current-song-audio');
    audio.src = song.source;
    audio.autoplay = true;
    audio.muted = false;
}

// Event listener for the play next button
playNextBtn.addEventListener('click', function () {
    currentSongIndex++; 
    if(currentSongIndex>= songs.length){
        currentSongIndex= 0;
    }
    playSong(currentSongIndex);
});
//event listener for the prev button:
playPrevBtn.addEventListener('click',function(){
    currentSongIndex--;
    if(currentSongIndex<0){
        currentSongIndex=songs.length-1;
    }
    playSong(currentSongIndex)
    
})

// Toggle switch function
toggleSwitch();
function toggleSwitch() {
    const toggleSwitch = document.getElementById('toggle-switch-button');
    const body = document.querySelector('body');

    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('white-background');
    });
}
