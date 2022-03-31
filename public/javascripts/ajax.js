

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


