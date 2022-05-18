

function new_post() {

    var titletxt = document.getElementById("titleid").value;
    var contenttxt = document.getElementById("contentid").value;


    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {

    };
    xhttp.open("POST", "users/addpost", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ "title": titletxt, "content": contenttxt }));

}

var pc = 0;
function get_post() {

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function () {


        const dt = JSON.parse(this.responseText);
        var length = dt.length;
        for (var i=0; i<length-pc;i++){

            let postdiv = document.createElement("DIV");
            let heading = document.createElement("H2");
            postdiv.appendChild(heading);
            let para = document.createElement("P");
            postdiv.appendChild(para);
            heading.innerHTML =  dt[i].title;
            para.innerHTML = dt[i].content;
            document.getElementById("main").appendChild(postdiv);

        }

        pc = pc +  i;

    };


    xhttp.open("GET", "/users/getposts", true);
    xhttp.send();

}