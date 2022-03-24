let count = 0;

function mouseCount(){
    count = count + 1;
    document.getElementById("mcount").innerHTML = count;

}

let countelements = 0;
function postContent(){

    let posts = document.createElement('DIV');
    posts.classList.add("posts");

    const date = new Date();
    let time = document.createElement('P');
    time.classList.add("post-time");
    document.querySelector(".post-time").innerHTML = date;
    posts.appendChild(time);

    let content = document.getElementById("text").value;

    let postcontent = document.createElement('P');
    postcontent.classList.add("post-content");
    document.querySelector(".post-content").innerHTML = content;
    posts.appendChild(postcontent);

    document.getElementsByTagName('body').appendChild(posts);

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
        //countelements = countelements + 1;
        //postContent();
        const date = new Date();
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

