const images =
document.querySelectorAll(".gallery-item");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

let currentIndex = 0;

function openImage(img){

lightbox.style.display="flex";

lightboxImg.src=img.src;

currentIndex=[...images].indexOf(img);

}

document.getElementById("close").onclick=()=>{

lightbox.style.display="none";

};

document.getElementById("next").onclick=()=>{

currentIndex++;

if(currentIndex>=images.length){

currentIndex=0;

}

lightboxImg.src=
images[currentIndex].src;

};

document.getElementById("prev").onclick=()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=images.length-1;

}

lightboxImg.src=
images[currentIndex].src;

};

function filterImages(category){

const allImages =
document.querySelectorAll(".gallery-item");

allImages.forEach(img=>{

if(category==="all"){

img.style.display="block";

}

else if(
img.classList.contains(category)
){

img.style.display="block";

}

else{

img.style.display="none";

}

});

}