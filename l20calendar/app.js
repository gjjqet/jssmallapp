//Get UI
const getcurmonth = document.getElementById("curmonth");
const getcuryear = document.getElementById("curyear");
const getuimonths = document.getElementById('months');
const getuiyears = document.getElementById("years");
const getcaldays = document.getElementById("caldays");
const getmonthbtn = document.querySelector(".month-btn");
const getyearbtn = document.querySelector(".year-btn");

const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
let startyear = 2020;
let endyear = 2030;

let month,year;

window.addEventListener("load",function(){
    // console.log("hay i am working");

    let getday = new Date();
    month = getday.getMonth();
    year = getday.getFullYear();

    console.log(getday);
    console.log(month);//3
    console.log(year);//2024

    getcurmonth.textContent = months[month];
    getcuryear.textContent = year;

    initmonths();
    inityears();
    initdays();

});

function initmonths(){
    // console.log("i am month");

    getuimonths.innerHTML = "";

    //<div class = "dropdown-item">Jan</div>;

    for(let x =0 ;x < months.length;x++){

        //console.log(x); // 0 to 11

        const newdiv = document.createElement("div");
        newdiv.textContent = months[x];
        newdiv.classList.add("dropdown-item");

        // console.log(newdiv);


        // newdiv.addEventListener("click",function(){

        //     //Method 1
        //     // console.log(x); //current month index
               // console.log(months[x])
               // month = x;
        //     // getcurmonth.textContent=months[x];
        //     // initdays();


        //     //=>Method 2
        //     // console.log(this);
        //     // console.log(this.textContent);
        //     month = months.indexOf(this.textContent);
        //     // console.log(month);
        //     getcurmonth.textContent = months[month];
        //     initdays();
        // })

        //=>method 3
        newdiv.onclick = updatedays(x);


        getuimonths.append(newdiv);

    }

};


function updatedays(idx){
    // console.log(idx);//0 to 11

    let selectmonth = idx ;
    // console.log(selectmonth) ; //0 to 11

    return function(){
        month = selectmonth;
        // console.log(month);

        getcurmonth.textContent = months[month];
        initdays();
    }
}



function inityears(){
    // console.log("i am year");

    getuiyears.innerHTML= "";

    //<div class="dropdown-item">2000</div>;


    for(let x =2020 ;x <= 2030;x++){

        // console.log(x);

        const newdiv = document.createElement("div");
        newdiv.textContent = x;
        newdiv.classList.add("dropdown-item");




        // newdiv.addEventListener("click",function(){

        //     //=>Method 1
        //     // console.log(x); //2020...2030
        //     //year = x;
        //     // getcuryear.textContent=months[x];
        //     // initdays();


        //     //=>Method 2
        //     // console.log(this);
        //     // console.log(this.textContent); //2020...2030
        //     year = this.textContent;
        //     getcuryear.textContent = year;
        //     initdays();

        // });
  

        //=>Method3
        //newdiv.onclick = updatedays2(x)


        //=>Method4
        // newdiv.onclick = ()=>{
        //     console.log(x);//2020..2030
        //     year = x;
        //     getcuryear.textContent = year;
        //     initdays();

        // }


        //=>Method 5
        //self invoking function
        newdiv.onclick = (function(){
            console.log(x);//2020..2030

            let selectyear = x;
            // console.log(selectyear);//2020..2030

            return function(){
                year = selectyear;
                // console.log(year);
                getcuryear.textContent= year;
                initdays()
            }
        })()


        // console.log(newdiv);
        getuiyears.append(newdiv);

    };

};

// function updatedays2(idx){
//     // console.log(idx);

//     let selectyear = idx;
//     // console.log(selectyear);

//     return function(){
//         year = selectyear;
//         // console.log(year);

//         getcuryear.textContent = year;
//         initdays();
//     }

// }



function initdays(){
    // console.log("i am day");

    getcaldays.innerHTML="";

    let tmpdays = new Date(year,month,0);
        // console.log(tmpdays);//Sun Mar 31 2024 00:00:00
    let getalldays = alldays(year,month);
        // console.log(getalldays);//30
    let getprevendday = tmpdays.getDay();
        // console.log(getprevendday);//0
    

    for(let x=0 ; x <= getprevendday ;x++){

        // console.log(x);// 0

        //<label class="day blank"></label>

        let newlabel = document.createElement("label");
        newlabel.className="day blank";
        // newlabel.classList.add("day","blank");
        // console.log(newlabel);

        getcaldays.appendChild(newlabel);

    };

    for(let y = 0 ; y < getalldays ; y++){

        // console.log(y); //0 to 29

        let eachday = y+1;

        //<label class="day"></label>


        let newlabel = document.createElement("label");
        newlabel.textContent = eachday;
        newlabel.classList.add("day");
        // console.log(newlabel);

        getcaldays.appendChild(newlabel);

    }



};


function alldays(year,month){

    //console.log(year,month);//2024 3

    let curalldays = new Date(year,month+1,0);
    //console.log(curalldays);//Tue Apr 30 2024 00:00:00
    curalldays = curalldays.getDate();
    // console.log(curalldays);//30
    return curalldays;

}




// getmonthbtn.addEventListener("click",function(){

//     if(this.lastElementChild.classList.contains("show")){
//         this.lastElementChild.classList.remove("show")
//     }else{
//         this.lastElementChild.classList.add("show");
//     }

// });



getyearbtn.addEventListener("click",function(){

    if(this.lastElementChild.classList.contains("show")){
        this.lastElementChild.classList.remove("show")
    }else{
        this.lastElementChild.classList.add("show");
    }

})



// console.log(new Date());
            //year month day
// console.log(new Date(2023,1,10));
// console.log(new Date(2023,0,0));
// console.log(new Date(2023,5,0));
// console.log(new Date(2023,1,30));