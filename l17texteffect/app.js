//Get UI
const language=["Nodejs","Reactjs","Vuejs","Laravel"];
const colors=["red","skyblue","violet","yellow"];
const gettxtani=document.querySelector(".txtani");
const gettxtlights=document.querySelectorAll(".text-light");

// console.log(language);
// console.log(language[0]);//give index take value

// console.log(language.indexOf("Reactjs"));//give value take index  1
// console.log(language.indexOf("laravel"));//give value take index  -1
// console.log(language.indexOf("Laravel"));//give value take index  3

// console.log(colors[language.indexOf("Reactjs")]);//skyblue
// console.log(colors[language.indexOf("Vuejs")]);//violet


//return 0 to 3

function* generator(){
    var idx=0;

    while(true){
        yield idx++;

        if(idx > 3){
            idx=0;
        }
    }   
}

const genfun=generator();
// console.log(genfun.next());//{value:0,done:false}
// console.log(genfun.next().value);//0
// console.log(genfun.next().value);//1
// console.log(genfun.next().value);//2
// console.log(genfun.next().value);//3
// console.log(genfun.next().value);//4
// console.log(genfun.next().value);//5

// console.log(language[genfun.next().value]);//Nodejs
// console.log(language[genfun.next().value]);//Reactjs
// console.log(language[genfun.next().value]);//Vuejs
// console.log(language[genfun.next().value]);//Laravel
// console.log(language[genfun.next().value]);//Nodejs
// console.log(language[genfun.next().value]);//Reactjs
// console.log(language[genfun.next().value]);//Vuejs


function showwords(word){
    // console.log(word);//NOdejs
    // console.log(word[0]);//N

    let x=0;

    gettxtani.innerHTML="";
    gettxtani.classList.add(colors[language.indexOf(word)]);

    // gettxtani.innerHTML=word;

    // gettxtani.innerHTML=word[0];  //N
    // gettxtani.innerHTML+=word[1];  //No
    // gettxtani.innerHTML+=word[2];  //Nod

    const showinterval= setInterval(function(){
        if(x >= word.length){
            clearInterval(showinterval);
            deletewords();
        }else{
            gettxtani.innerHTML+=word[x];
            x++;
        }
    },500);

};


function deletewords(){

    const getword=gettxtani.innerHTML;
    //console.log(getword);//Nodejs

    let getlastidx=getword.length-1;
    //console.log(getlastidx);//5

    //NOdejs  0 1 2 3 4 5
    //Nodej   0 1 2 3 4
    //Node    0 1 2 3
    //Nod     0 1 2
    //No      0 1
    //N       0


    let delinterval=setInterval(function(){
        if(getlastidx>=0){
            gettxtani.innerHTML=gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length-1);
            getlastidx--;
        }else{
            //remove old color
            gettxtani.classList.remove(colors[language.indexOf(getword)]);


            //get new language
            showwords(language[genfun.next().value]);
            clearInterval(delinterval)
        };
    },500);

}



showwords(language[genfun.next().value])



gettxtlights.forEach(function(gettxtlight){
    //console.log(gettxtlight);

    let arrtexts=gettxtlight.textContent.split("");
    //console.log(arrtexts);

    gettxtlight.textContent="";

    arrtexts.forEach(function(arrtext,idx){
        //console.log(arrtext);
        //console.log(idx);

        let newem=document.createElement("em");

        newem.textContent=arrtext;
        //console.log(newem);
        newem.style.animationDelay=`${idx * 0.1}s`;

        gettxtlight.append(newem);
    });
});





// setInterval()
//clearInterval()