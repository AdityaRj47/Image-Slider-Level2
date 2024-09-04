//Initialise the slide index to 0
let currentSlideIndex=0;

//creating a function to show and hide the slides
function showSlide(index){
 const slides=document.getElementsByClassName("carousel-slide");
 const dots=document.getElementsByClassName("dot");
 //condition check if index is greater than equal to the no. of slides
 //if true then it will reset the currentSlideIndex to 0.This will look back to the beginning
 //if the user clicks on the next on the last slide
 if(index >= slides.length){
    currentSlideIndex=0;
 }else if(index < 0){
    currentSlideIndex = slides.length - 1;
 }
 //Hide all slides
 for(let i=0; i<slides.length; i++){
    slides[i].style.display="none";
 }
 //Remove active class from all dots
 for(let i=0; i<dots.length; i++){
    dots[i].className= dots[i].className.replace("dot-active","");
 }
 //Display the current slide and set the corresponding dot as active
 slides[currentSlideIndex].style.display="block";
 dots[currentSlideIndex].className +=" dot-active";

 //Assigning the popup to the image tag (Level 2)
 const popupImage=document.getElementById("popup-image");
 popupImage.src= slides[currentSlideIndex].src;
}


//Function to change the slide
function changeSlide(n){
    showSlide((currentSlideIndex+=n));
}

//function to jump to specific slide
function currentSlide(n){
    showSlide((currentSlideIndex=n));
}
//Initial display of the setup
showSlide(currentSlideIndex);

//Adding the functionality for Level 2 
function openPopup(){
    const model= document.getElementById("imagePopUp");
    model.style.display = "flex";

}
function closePopup(){
    const model= document.getElementById("imagePopUp");
    model.style.display = "none";
}