//Get UI
const gettitle = document.querySelectorAll(".title");
// console.log(gettitle)

gettitle.forEach(onetitle => {
    // console.log(onetitle)

    onetitle.addEventListener("click",function(e){
        // console.log(e.target)

       e.target.classList.toggle("active");

       const getparagraph = e.target.nextElementSibling;
    //    console.log(getparagraph)
      
       if(onetitle.classList.contains("active")){
        getparagraph.style.height = getparagraph.scrollHeight + "px";
       }else{
        getparagraph.style.height = "0px";
       }

    })

    const getparagraph = onetitle.nextElementSibling;

    if(onetitle.classList.contains("active")){
        getparagraph.style.height = getparagraph.scrollHeight + "px";
    }

});

