const APIKEY = "AIzaSyDZbSNTDqGhzkAI8V_yz40ZvZx8heNJi3M";
const CHANNELID = "UCTxI_j925sA6rZheNsyuMow"

let link = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&channelId=${CHANNELID}&part=snippet,id&order=date&maxResults=20`

let container = document.getElementById('blogContainer');


export function loadVideo(){
    
    //console.log(link);
    fetch(link)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        const videos = data.items;
        //console.log(videos);
        videos.forEach((video, index) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
              <h1>${video.snippet.title}</h1>
              <p><strong>Date:</strong> ${video.snippet.publishedAt}</p>
              <p>${video.snippet.description}</p>
              <button data-index="${index}" class="more-btn">Show Video</button>
            `;
            container.appendChild(card);
            
        });

    })


}