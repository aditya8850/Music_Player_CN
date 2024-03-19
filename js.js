const songs= [
    {id:1,
    name: "Time",
    artist:"Nf",
    img:"/thumbnails/NF-Time.webp",
    genre:"HipHop",
    source:"/audioSRC/nf-time.mp3",}
    ,
    // {id:2,
    // name:,
    // artist:,
    // img:,
    // genre:,
    // source:,}
    // ,
    // {id:3,
    // name:,
    // artist:,
    // img:,
    // genre:,
    // source:,}
    // ,
    // {id:4,
    // name:,
    // artist:,
    // img:,
    // genre:,
    // source:,}
    // ,
    // {id:5,
    // name:,
    // artist:,
    // img:,
    // genre:,
    // source:,}
    // ,
    // {id:6,
    // name:,
    // artist:,
    // img:,
    // genre:,
    // source:,}

]

//function for toggle-switch
toggleSwitch()
function toggleSwitch(){const toggleSwitch = document.getElementById('toggle-switch-button');
const body = document.querySelector('body');

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('white-background');
});}

//function for showing songs
showSongs()
function showSongs(){
    //showing list of songs on the first card
const listOfSongs= document.querySelector('.list-inside');

const pInLists= document.createElement('p');
pInLists.innerHTML= `${songs[0].artist}: ${songs[0].name}`

listOfSongs.appendChild(pInLists)
//adding e-listener to update thumbnail ,name and audio src.
pInLists.addEventListener('click',function(e){
    const thumbnail= document.querySelector(".thumbnail-song");
   (thumbnail.src)= songs[0].img;
   
   const name= document.querySelector('#current-song');
   name.innerHTML= songs[0].name;

   const audio= document.querySelector('.current-song-audio');
   audio.src= songs[0].source;
   audio.autoplay=true;
   

   });

}

console.log("hey");
console.log("hey");
console.log("hey");


