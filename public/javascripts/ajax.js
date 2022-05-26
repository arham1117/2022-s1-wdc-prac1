
function getActors(){

    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        const actors = JSON.parse(this.responseText);
        var length = actors.length;

        for (var i=0;i<length;i++){
            let tr = document.createElement("tr");
            document.getElementById("test").appendChild(tr);
            let fn = document.createElement("td");
            let ls = document.createElement("td");
            fn.innerHTML = actors[i].first_name;
            ls.innerHTML = actors[i].last_name;
            tr.appendChild(fn);
            tr.appendChild(ls);

        }

    };

    xhttp.open("GET", '/result' );
    xhttp.send();

}

function addActor(){

    var first_name = document.getElementById("actor-first-name").value;
    var last_name = document.getElementById("actor-last-name").value;

    const xhttp = new XMLHttpRequest();


    xhttp.onreadystatechange = function() {


    };

    xhttp.open("POST", '/addactor' );
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ first_name: first_name, last_name: last_name }));
}