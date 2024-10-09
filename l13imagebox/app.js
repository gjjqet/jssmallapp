//Get UI
const getimageboxs = document.querySelectorAll('.imgbox');
// console.log(getimagebox);

getimageboxs.forEach(function(getimagebox,idx){
    // console.log(getimagebox);

    getimagebox.addEventListener("click",function(){
        // console.log(this);
        // console.log(idx); // 0 to 4

        showbox(idx);
    })
})

function showbox(idx){
    console.log("form parameter = ",idx); // 0 to 4 

    getimageboxs.forEach(function(imagebox,curridx){
        // console.log("current idx = ",curridx);

        if(idx === curridx){
            imagebox.classList.add("show");

            imagebox.addEventListener("click",function(e){
                // console.log(e.target)

                if(e.target.className === "btn-close"){
                    // console.log("hi")
                    imagebox.classList.remove("show");
                }

                if(e.target.classList.contains("btn")){
                    console.log("hay");

                    // const getsubbtn = imagebox.querySelector(".btn");
                    const getsubbtn = getimageboxs[idx].querySelector(".btn");
                    getsubbtn.textContent = "Subscribed";
                }

            })

        }else{
            imagebox.classList.remove("show");
        }
    })
}