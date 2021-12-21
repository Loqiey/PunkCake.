let items= [
    {
        path:"img/1px.webp",
        name:"was"
    },
    {
        path:"img/2px.webp",
        name:"Pnaemrt"
    },
    {
        path:"img/3px.webp",
        name:"name"
    },
    {
        path:"img/4px.webp",
        name:"jajs"
    }

 ];
 
 let currentSlide=0;
 let curSlide=0;
 
 const sliderItem= document.querySelector(".slider__item");
 const btnNext=document.querySelector(".slider__btn--next");
 const btnPrev=document.querySelector(".slider__btn--prev");
 const btnsNav=document.querySelectorAll(".slider__btn--nav");
 
 btnNext.addEventListener("click",changeSlide);
 function changeSlide(event){
     if(currentSlide == items.length -1){
         currentSlide = 0;
     }
     else{
         currentSlide++;
     }
     sliderItem.style.background ="url(" + items [currentSlide].path +")";
     sliderItem.querySelector(".slider_name").innerHTML= items[currentSlide].name;
 }
 
 btnPrev.addEventListener("click",changedSlide);
 function changedSlide(event){
     if(curSlide==0 ){
         curSlide=items.length -1;
     }
     else{
         curSlide--;
     }
     sliderItem.style.background= "url("+items[curSlide].path +")";
     sliderItem.querySelector(".slider_name").innerHTML= items[curSlide].name;
 }
 
 for (let btn of btnsNav){
     btn.addEventListener("click", slideTo);
 }
 
 function slideTo(event){
     
     currentSlide=event.target.getAttribute("data-nume-slide");
     sliderItem.style.background ="url(" + items [currentSlide].path +")";
     sliderItem.querySelector(".slider_name").innerHTML= items[currentSlide].name;
 }
 