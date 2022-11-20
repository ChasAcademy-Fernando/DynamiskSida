async function getData() {
    let response = await fetch('/data.json');
    let placeOfWork = document.getElementById("grid-content").getElementsByTagName("h3"); //create an array with all h3 content inside of the work section of the page
    let discOfWork = document.getElementById("grid-content").getElementsByTagName("p"); //create an array with all p content inside of the work section of the page
    let placeOfStudy = document.getElementById("edu").getElementsByTagName("h3"); //create an array with all h3 content inside of the work section of the page
    let discOfStudy = document.getElementById("edu").getElementsByTagName("p"); //create an array with all p content inside of the work section of the page

    if (response.ok) { 
      let data = await response.json();
     /*  placeOfWork[0].innerHTML = data.workPlaces[0].Work;
      placeOfWork[1].innerHTML = data.workPlaces[1].Work;
      placeOfWork[2].innerHTML = data.workPlaces[2].Work; */ 
      // Kolla upp om man kan göra det i en for-loop
      
      for (let i = 0; i < data.workPlaces.length; i++) { //Loopa genom alla arbetsplatser, kan man göra det med foreach?
        
       placeOfWork[i].innerHTML = data.workPlaces[i].Work;
       discOfWork[i].innerHTML = data.workPlaces[i].Discription;
       }
       for (let i = 0; i < data.education.length; i++) {  //Loopa genom alla utbildningar
        placeOfStudy[i].innerHTML = data.education[i].School;
        discOfStudy[i].innerHTML = data.education[i].Discription;
        }
      
      
      
    } else {
      console.log("HTTP-Error: " + response.status);
    }
    }
// Hero Slider
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
button.addEventListener("click", () => {
const slideChange = button.dataset.carouselButton === "next" ? 1 : -1 //if button has data set 'next' then give variable slideChange the value of 1 otherwise -1
/*  if (button.dataset.carouselButton === "next"){
    slideChange = 1

}
else 
slideChange = -1; */

const activeSlide = document.querySelector("[data-active]") // the slide that is on display
let allSlides = document.querySelectorAll("[data-slide]") // create a nodelist of all the slides 

let newIndex = Array.from(allSlides).indexOf(activeSlide) + slideChange // get a new index of array to become active, convert variable 'allSLides' from a nodelist into an array, dont know why it cant find activeSlide when its a nodelist, Ask teacher
if (newIndex < 0) { //Display the last image in Slides array
    newIndex = allSlides.length - 1
}
if (newIndex >= allSlides.length){ //Display the first image in Slides array
    newIndex = 0
} 
delete activeSlide.dataset.active // delete old active slide (delete the data set)
allSlides[newIndex].dataset.active = true //give the new slide the active data set


})
})
    getData()
    
 
    