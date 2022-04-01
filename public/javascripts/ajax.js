

function timestamp(){

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById('para').innerHTML = "This page was last viewed" + " " + this.responseText;
    };

    xhttp.open("GET", '/last.txt' );
    xhttp.send();

}

function color(){

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById('heading').innerHTML = this.responseText;
        document.getElementById('heading').style.color = this.responseText;
    };

    xhttp.open("GET", '/color.txt' );
    xhttp.send();

}

function email(){
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById('mainID').innerHTML = this.responseText;
    };

    xhttp.open("GET", '/contact.ajax' );
    xhttp.send();

}


function search(){
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById('mainID').innerHTML = this.responseText;
    };

    xhttp.open("GET", '/search.ajax' );
    xhttp.send();

}


function about(){
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById('mainID').innerHTML = this.responseText;
    };

    xhttp.open("GET", '/about.ajax' );
    xhttp.send();

}

function accept(){
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
    };

    xhttp.open("GET", '/accept' );
    xhttp.send();

}


function contentcheck(){
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        if(this.responseText == 403){
            let para = document.createElement("p");
            para.innerHTML = "Please accept Terms.";
            let button = document.createElement("button");
            button.onclick = accept;
            document.getElementById('body').innerHTML = "HARHAHAH";

        }
        else{
                document.getElementById('body').innerHTML = this.responseText;

        }
    };

    xhttp.open("GET", '/content.ajax' );
    xhttp.send();

}
