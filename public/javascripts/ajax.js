

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
