//GET UI
const getprogressbar = document.getElementById("progress-bar");

window.onscroll = function(){
    // console.log("hay");
    scrollpoint();
}

function scrollpoint(){
    let getscrolltop = document.documentElement.scrollTop;
    // console.log(getscrolltop); 0 to 4140

    let getclientheight = document.documentElement.clientHeight;
    // console.log(getclientheight);//713

    let getscrollheight = document.documentElement.scrollHeight;
    // console.log(getscrollheight);//4853

    let calheight = getscrollheight - getclientheight;
    // console.log(calheight);//

    // let getfinal = Math.floor(getscrolltop*100 / calheight);
    // console.log(getfinal);

    let getfinal = Math.floor((getscrolltop/calheight)*100);
    // console.log(getfinal);

    getprogressbar.style.width = `${getfinal}%`;
}

function printme(){
    // console.log("hay");

    window.print(); // print() is default function . which mean already include in js
}