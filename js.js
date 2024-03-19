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
        name: "heaven",
        artist: "eminem",
        img: "thumbnails/Eminem-Heaven.webp",
        genre: "hiphop",
        source: "audioSRC/eminem-heaven.mp3",
    }
    ,
    {id:3,
    name:"neurotica",
    artist:"polyphia",
    img:"thumbnails/polyphia-pg",
    genre:"metal",
    source:"audioSRC/polyphia-neurotica.mp3",}
    ,
    {id:4,
    name:"without me",
    artist:"halsey ft Juice Wrld",
    img:"thumbnails/Without-Me.png",
    genre:"pop",
    source:"audioSRC/without-me.mp3",}
    ,
    {id:5,
    name:"all time low",
    artist:"jon bellion",
    img:"thumbnails/All-Time-Low.png",
    genre:"pop",
    source:"audioSRC/all-time-low.mp3",}
    ,
    

]

//function for toggle-switch
toggleSwitch()
function toggleSwitch() {
    const toggleSwitch = document.getElementById('toggle-switch-button');
    const body = document.querySelector('body');

    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('white-background');
    });
}

//function for showing songs

showSongs(songs)
function showSongs(songs) {
    //showing list of songs on the first card
    const listOfSongs = document.querySelector('.list-inside');
    listOfSongs.classList.add('cursor-pointer')
    songs.forEach((song) => {
        const pInLists = document.createElement('p');
        pInLists.innerHTML = song.name
        // console.log(listOfSongs)
        pInLists.innerHTML = `${song.artist}: ${song.name}`
        listOfSongs.appendChild(pInLists);

        pInLists.addEventListener('click', function (e) {
            const thumbnail = document.querySelector(".thumbnail-song");
            (thumbnail.src) = song.img;

            const name = document.querySelector('#current-song');
            name.innerHTML = song.name;

            const audio = document.querySelector('.current-song-audio');
            audio.src = song.source;
            audio.autoplay = true;


        });
    })



    //adding e-listener to update thumbnail ,name and audio src.


}




