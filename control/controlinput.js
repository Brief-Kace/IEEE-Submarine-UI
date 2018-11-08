function Moveright(e)
{
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        console.log(document.getElementById("form").innerHTML = "&#8593");
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log(document.getElementById("form").innerHTML = "&#8595");
    }
    else if (e.keyCode == '37') {
       // left arrow
       
    console.log(document.getElementById("form").innerHTML = "&#8592");
    }
    else if (e.keyCode == '39') {
       // right arrow
    console.log(document.getElementById("form").innerHTML = "&#x2192");

    
    }
        else if (e.keyCode == '87') {
       // w arrow
    console.log(document.getElementById("form").innerHTML = 'w');

    
    }
    
        else if (e.keyCode == '65') {
       // a
    console.log(document.getElementById("form").innerHTML = "a");

    
    }
    
        else if (e.keyCode == '83') {
       // s
    console.log(document.getElementById("form").innerHTML = "s");

    
    }
    
        else if (e.keyCode == '68') {
       // d
           console.log(document.getElementById("form").innerHTML = "d");

    
    }
//alert(e);
//if (input == 
}

}







