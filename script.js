const apiKey = 'srxo2HFTVnPaGPQKaVmc49-JeG7xmUbP_rOijeF0p38'; 
let likeCount = 0;

document.addEventListener('DOMContentLoaded', fetchRandomImage);

function fetchRandomImage() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('image').src = data.urls.regular;
            document.getElementById('photographer').innerText = `Фото от: ${data.user.name}`;
        })
        .catch(err => console.error(err));
}

document.getElementById('like-btn').addEventListener('click', () => {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
});