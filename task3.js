
let count = 0;

function mouseCount() {
    count = count + 1;
    document.getElementById("mcount").innerHTML = count;

}


function postContent() {

    const date = new Date();
    const time = document.createElement("p");
    time.innerHTML = date;
    time.classList.add('post-time');
    document.querySelector("#posts").appendChild(time);

    var textcontent = document.getElementById("text").value;
    const paragraph = document.createElement("p");
    paragraph.innerHTML = textcontent;

    if (document.getElementById("redoption").checked) {
        paragraph.style.color = "red";
    }
    if (document.getElementById("blueoption").checked) {
        paragraph.style.color = "blue";
    }

    paragraph.classList.add('post-content');
    document.querySelector("#posts").appendChild(paragraph);

}

function newPost() {

    var num = document.getElementsByName("quantity")[0].value;

    for (let i = 0; i < num; i++) {
        postContent();
    }

}

function hideMain() {
    document.getElementById("main").style.display = "none";
    document.getElementById("menu").style.display = "block";

}
function hideMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("main").style.display = "block";

}


const element = document.getElementById("textinput");
element.addEventListener('change', colorMenu);

function colorMenu(){
    var color = document.getElementById("textinput").value;
    document.body.style.backgroundColor = color;
}