
var images = [];

images[0] = ["https://images.pexels.com/photos/5137664/pexels-photo-5137664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
];
images[1] = ["https://images.pexels.com/photos/572688/pexels-photo-572688.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
];
images[2] = ["https://images.pexels.com/photos/7925859/pexels-photo-7925859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
];
images[3] = ["https://images.pexels.com/photos/7753054/pexels-photo-7753054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"

];
images[4] = ["https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"

];
images[5] = ["https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"

];
images[6] = ["https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
];
images[7] = ["https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
];

var index = 0;

function change() {
  document.getElementById("mainPhoto").src = images[index];
  if (index == 7) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 7000);
}

window.onload = change();





const search = document.querySelector('#search-form')
console.log(search)
search.addEventListener('submit', function(e){
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    const container = document.querySelector('.container')
    const imageBase = JSON.parse(xhttp.responseText);
    const images =imageBase.photos
    container.innerHTML=''
       for(const image of images){
        console.log(image)
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');
        imageContainer.innerHTML=`
            <img src = ${image.src.portrait}>
            <h4>${image.alt}</h4>
        






        `;
        container.appendChild(imageContainer)
       }
       
    }
};
const textValue = document.querySelector('#search-bar').value
console.log(textValue)
xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}&per_page=8`, true);
xhttp.setRequestHeader('Authorization', '563492ad6f9170000100000196aa2a95555e4d408d4e4222c7b58079');
xhttp.send();
})

const button = document.querySelector('#go')
button.addEventListener('click', function(e){
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    const container = document.querySelector('.container')
    const imageBase = JSON.parse(xhttp.responseText);
    const images =imageBase.photos
    container.innerHTML=''
       for(const image of images){
        console.log(image)
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');
        imageContainer.innerHTML=`
            <img src = ${image.src.portrait}>
            <h4>${image.alt}</h4>
        `;
        container.appendChild(imageContainer)
       }
       
    }
};
const textValue = document.querySelector('#search-bar').value
console.log(textValue)
xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}&per_page=8`, true);
xhttp.setRequestHeader('Authorization', '563492ad6f9170000100000196aa2a95555e4d408d4e4222c7b58079');
xhttp.send();
})







/*credit with photos provided by pexels*/