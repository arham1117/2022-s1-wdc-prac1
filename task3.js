let count = 0;

function mouseCount(){
    count = count + 1;
    document.getElementById("mcount").innerHTML = count;

}

let countelements = 0;
function postContent(){

    const date = new Date();
    const time = document.createElement("p");
    time.innerHTML = date;
    time.classList.add('post-time');
    //document.querySelector(".post-time").appendChild(time);
    document.querySelector("#posts").appendChild(time);

    //time.className = "post-time";
    //document.querySelector("#posts").appendChild(time);

    var textcontent = document.getElementById("text").value;
    const paragraph = document.createElement("p");
    paragraph.innerHTML = textcontent;
    paragraph.classList.add('post-content');
    //paragraph.className = "post-content";
    document.querySelector("#posts").appendChild(paragraph);

    var elements = document.getElementsByClassName("post-content");

    if(document.getElementById("redoption").checked){

        for(let i = 0 ; i<countelements;i++){
            elements[countelements].style.color ="red";
        }

    }

    if(document.getElementById("blueoption").checked){
        for(let i = 0 ; i<countelements;i++){
            elements[countelements].style.color ="blue";
        }

    }


}

function newPost(){

    var num = document.getElementsByName("quantity")[0].value;

    for (let i = 0 ; i<num ;i++){
        countelements = countelements + 1;
        postContent();
    }

}

function hideMain(){
    document.getElementById("main").style.display = "none";
    document.getElementById("menu").style.display = "block";

}
function hideMenu(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("main").style.display = "block";

}

