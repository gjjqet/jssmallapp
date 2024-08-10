//Get UI
const getloginbtn = document.querySelector(".login");
const getmodal = document.querySelector(".modal");
const getclosebtn = document.querySelector('.close-btn');

getloginbtn.addEventListener("click",function(){
    getmodal.style.display = "block";
})

getclosebtn.addEventListener("click",function(){
    getmodal.style.display = "none";
})

window.onclick = function(e){

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }

}