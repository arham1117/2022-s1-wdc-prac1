let count = 0;
function mouseCount(){
    count = count + 1;
    document.getElementById("mcount").innerHTML = count;

}

function postContent(){
    const date = new Date();
    document.getElementsByClassName("post-time")[0].innerHTML = date;
    let content = document.getElementById("text").value;
    document.getElementsByClassName("post-content")[0].innerHTML= content;

}