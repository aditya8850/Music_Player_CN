const songs = [
    {
        id: 1,
        name: "Time",
        artist: "Nf",
        img: "thumbnails/NF-Time.webp",
        genre: "HipHop",
        source: "audioSRC/nf-time.mp3",
    }
    ,
    {
        id: 2,
        name: "Heaven",
        artist: "Eminem",
        img: "thumbnails/Eminem-Heaven.webp",
        genre: "HipHop",
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
const genreSelect= document.querySelector('#genre-select')
const currentPlayList= document.querySelector('.playlist-div');


//function to add a playlist

function createPlaylist(){

}


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

// Toggle switch function
function toggleSwitch() {
    const toggleSwitch = document.getElementById('toggle-switch-button');
    const body = document.querySelector('body');

    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('white-background');
    });
}

//func:
function showSongsByGenre(genre) {
    
    listOfSongs.innerHTML = '';

   
    const filteredSongs = songs.filter(song => song.genre === genre);

    
    filteredSongs.forEach((song) => {
        const pInLists = document.createElement('p');
        pInLists.classList.add('cursor-pointer');
        pInLists.innerHTML = `${song.artist}: ${song.name}`;
        listOfSongs.appendChild(pInLists);

        pInLists.addEventListener('click', function (e) {
            currentSongIndex = songs.indexOf(song); // Update the current song index
            playSong(currentSongIndex);
        });
    });
}


// Event listener for genre selection change
genreSelect.addEventListener('change', function () {
    const selectedGenre = genreSelect.value; // Get the selected genre
    if (selectedGenre === 'Allsongs') {
        showSongsAll(); 
    } else {
        showSongsByGenre(selectedGenre); 
    }
});

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

createPlaylist()
// Function to add a new playlist
function createPlaylist() {
    const addPlayListDiv = document.querySelector('.playlist-child-1');
    const allPlayListDiv = document.querySelector('.playlist-child-2');
    const inputPlaylist = document.createElement('input');
    const submitPlaylist = document.createElement('button');
    
    
    // Set attributes and text for submit button
    submitPlaylist.setAttribute('type', 'submit');
    submitPlaylist.innerHTML = "Submit";
    submitPlaylist.classList.add('button');
   
    // Append input and submit button to the playlist creation section
    addPlayListDiv.appendChild(inputPlaylist);
    addPlayListDiv.appendChild(submitPlaylist);
    
    // Event listener for submitting playlist name
    submitPlaylist.addEventListener('click', function() {
        const playlistName = inputPlaylist.value.trim();
        if (playlistName !== '') {
            // Check if the playlist name is unique
            const existingPlaylists = document.querySelectorAll('.playlist-section h3');
            for (const existingPlaylist of existingPlaylists) {
                if (existingPlaylist.textContent === playlistName) {
                    alert('Playlist name must be unique.');
                    return;
                }
            }
            
            // Create a new playlist section
            const playlistSection = document.createElement('div');
            playlistSection.classList.add('playlist-section');

            // Create a heading for the playlist name
            const playlistNameHeading = document.createElement('h3');
            playlistNameHeading.textContent = playlistName;
           
             const addButton= document.querySelector('.addToPlaylist')
            // Append playlist name to the playlist section
            playlistSection.appendChild(playlistNameHeading);

            // Append playlist section to the list of playlists
            allPlayListDiv.appendChild(playlistSection);
            console.log(allPlayListDiv);
            // Clear input field after submitting
            inputPlaylist.value = '';

            // Event listener for selecting the playlist
            addButton.addEventListener('click', function() {
                addToPlaylist(playlistNameHeading.textContent);
                console.log(playlistNameHeading.textContent);
            });
        } else {
            alert('Please enter a playlist name.');
        }
    });
}


// Function to add the current song to the selected playlist
function addToPlaylist(playlistName) {
   
    const currentSong = songs[currentSongIndex];
    const playlistSections = document.querySelectorAll('.playlist-section');
    
    
    for (const section of playlistSections) {
        const heading = section.querySelector('h3');
        if (heading.textContent === playlistName) {
            const playListItem = document.createElement('p');
            playListItem.textContent = `${currentSong.artist}: ${currentSong.name}`;
            section.appendChild(playListItem);
            console.log(playListItem);
            // Add the song to the selected playlist 

            break;
        }
    }
}




showSongsAll();
toggleSwitch();

console.log(document);