let count = 0;

function mouseCount(){
    count = count + 1;
    document.getElementById("mcount").innerHTML = count;

}

let countelements = 0;
function postContent(){

    const date = new Date();
    document.querySelector(".post-time").innerHTML = date;
    let content = document.getElementById("text").value;
    document.querySelector(".post-content").innerHTML= content;




    /* const date = new Date();
    const timenode = document.createTextNode(date);
    const time = document.createElement("p");
    time.appendChild (timenode);
    time.className = "post-time";
    document.querySelector("#posts").appendChild(time);



    var textcontent = document.getElementById("text").value;
    const node = document.createTextNode(textcontent);
    const paragraph = document.createElement("p");
    paragraph.appendChild (node);
    paragraph.className = "post-content";
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
 */


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

