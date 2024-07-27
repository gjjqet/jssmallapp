//Get UI
const getitems = document.getElementsByClassName("carousel-items");
const getdots = document.querySelectorAll(".dot");
// console.log(getitems);
// console.log(getdots);

let currslide = 0;

document.getElementById("prev").addEventListener("click",function(){
   carousel(currslide -= 1)
})

document.getElementById("next").addEventListener("click",function(){
    carousel(currslide +=1 )
})


function carousel(slide){

    for(let x=0 ; x<getitems.length ; x++){
        getitems[x].style.display = "none";
    }

    for(let y=0 ; y < getdots.length ;y++){
        getdots[y].classList.remove("active");
    }

    if(slide < 0){
        currslide = getitems.length -1;
    }else if(slide > getitems.length - 1){
        currslide = 0
    }

    getitems[currslide].style.display = "block";

    getdots[currslide].classList.add("active")

}


for(let y=0 ; y < getdots.length ; y++){

    getdots[y].addEventListener("click",function(){
        currslide = this.getAttribute("data-bs-slide-to");
        carousel(currslide);
    })

}

carousel(currslide)

