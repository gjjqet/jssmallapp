//Get UI
const getinput = document.getElementById("search");
let getsortazm1btn = document.getElementById("sortazm1"),
    getsortzam1btn = document.getElementById("sortzam1"),
    getsortazm2btn = document.getElementById("sortazm2"),
    getsortzam2btn = document.getElementById("sortzam2");

const getul = document.getElementById("members");
const getlis = getul.getElementsByTagName("li");

// console.log(getul);
// console.log(getlis);
// console.log(getlis[0]);

getsortazm1btn.addEventListener("click",sortingazm1);
getsortzam1btn.addEventListener("click",sortingzam1);

getsortazm2btn.addEventListener("click",sortingazm2);

getinput.addEventListener("keyup",filter);

function filter(){

    const filter = this.value.toLowerCase();
    // console.log(filter);

    for(let x=0 ; x < getlis.length ; x++){
        // console.log(x);

        // getlink = getlis[x].getElementsByTagName("a");
        // getlink = getlis[x].getElementsByTagName("a")[0];
        getlink = getlis[x].querySelector("a");
        // console.log(getlink);

        const gettext = getlink.textContent || getlink.innerText;
        console.log(gettext);
        console.log(gettext.toLowerCase());

        if(gettext.toLowerCase().indexOf(filter) > -1){
            getlis[x].style.display = "";
        }else{
            getlis[x].style.display = "none";
        }

    }

}

function sortingazm1(){

    console.log("method 1 AZ");

    let lis = [];

    for(let i=0 ; i < getlis.length ; i++){
        // console.log(getlis[i]);
        // console.log(getlis[i].innerHTML);
        // console.log(getlis[i].textContent);

        lis.push(getlis[i].textContent);
    }

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.reverse());
    // console.log(lis.sort().reverse());

    const azresults = lis.sort();
    // console.log(azresults);

    getul.innerHTML = "";

    azresults.forEach(function(azresult){
        // console.log(azresult);

        const newli = document.createElement("li");
        const newlink = document.createElement("a");
        newlink.href = "javascript:void(0)";

        newlink.appendChild(document.createTextNode(azresult));

        newli.appendChild(newlink);

        // console.log(newli);

        getul.appendChild(newli);

    })

}


function sortingzam1(){

    console.log("method 1 ZA");

    let lis = [];

    for(let i=0 ; i < getlis.length ; i++){
        // console.log(getlis[i]);
        // console.log(getlis[i].innerHTML);
        // console.log(getlis[i].textContent);

        lis.push(getlis[i].textContent);
    }

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.reverse());
    // console.log(lis.sort().reverse());

    const azresults = lis.sort().reverse();
    // console.log(azresults);

    getul.innerHTML = "";

    azresults.forEach(function(azresult){
        // console.log(azresult);

        const newli = document.createElement("li");
        const newlink = document.createElement("a");
        newlink.href = "javascript:void(0)";

        newlink.appendChild(document.createTextNode(azresult));

        newli.appendChild(newlink);

        // console.log(newli);

        getul.appendChild(newli);

    })

}


// Method 2

function sortingazm2(){
    console.log("method 2 AZ");

    let shouldswitch = true;
    let switching = true;

    // console.log(getlis.length);// 35 

    while(switching){
        switching = false;

        let i;

        for(i=0 ; i < getlis.length - 1 ; i++){
            // console.log(i); // 0 to 34 // after-1 = 0 to 33 

            shouldswitch = false;

            // 0=Ag Ag  > 1 = Mg Mg 

            if(getlis[i].textContent.toLocaleLowerCase() > getlis[i+1].textContent.toLocaleLowerCase()){
                shouldswitch = true;
                break;
            }
        }

        // console.log(i);//34

        if(shouldswitch){
            //parent.insertBefore(new,existing)

            getlis[i].parentElement.insertBefore(getlis[i+1],getlis[i]);

            switching = true;

        }

    }

}