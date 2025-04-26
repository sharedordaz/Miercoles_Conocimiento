const APIKEY = "AIzaSyDZbSNTDqGhzkAI8V_yz40ZvZx8heNJi3M";
const CHANNELID = "UCTxI_j925sA6rZheNsyuMow"

let link = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&channelId=${CHANNELID}&part=snippet,id&order=date&maxResults=20`

let container = document.getElementById('blogContainer');

function clearVideo(){
    let video = document.getElementById('ytvideo');
    video.src= "";
}

function loadVideo(url){
    let video = document.getElementById('ytvideo');
    video.src = url;
}

export function loadVideoList(){
    
    //console.log(link);
    try{
    fetch(link)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        const videos = data.items;
        //console.log(videos);
        videos.forEach((video, index) => {
            const card = document.createElement("div");
            const date = new Date(video.snippet.publishedAt);

            // Array con los nombres de los meses
            const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        
            // Obtener la fecha de forma local (con zona horaria correcta)
            const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();
        
            // Formatear la fecha como "día / mes año"
            const polishedDate = `${day} / ${month} ${year}`;

            card.classList.add("card");
            card.innerHTML = `
              <h1>${video.snippet.title}</h1>
              <img src="${video.snippet.thumbnails.medium.url}" alt="Thumbnail" loading="lazy" width="180" height="120" >
              <p><strong>Subido el:</strong> ${polishedDate}</p>
              <p>${video.snippet.description}</p>
              <button data-index="${index}" class="more-btn" data-url="https://www.youtube.com/embed/${video.id.videoId}">Ver Video</button>
            `;
            container.appendChild(card);
            
        });
        let myButtons = document.querySelectorAll(".more-btn");
        let xSymbol = document.getElementById("modalClose");
        let modal = document.getElementById("modal");
  
        myButtons.forEach((myButton) => {
        myButton.addEventListener('click', () =>{
            const videoURL = myButton.getAttribute('data-url');
            console.log('Video URL:', videoURL);
            loadVideo(videoURL);

            modal.classList.toggle('hidden');
  
        })
  
        })
  
        xSymbol.addEventListener('click', () =>{
            modal.classList.toggle('hidden');
            clearVideo();
        })        

    })
    }
    catch(err){
        console.error("Failed to fetch events");
        container.innerHTML = "<p>No se cargaron los eventos</p>";

    }
}