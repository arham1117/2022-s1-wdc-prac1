

function timestamp(){

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById('para').innerHTML = "This page was last viewed" + " " + this.responseText;
    };

    xhttp.open("GET", '/last.txt' );
    xhttp.send();


}


