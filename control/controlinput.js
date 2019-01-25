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
 //If the r key is pressed display r
     else if (e.keyCode == '82') 
        {
           // r
               console.log(document.getElementById("form").innerHTML = "r");
               light = "r";
        lightUp(light);    
        }

     //If the f key is pressed display f     
     else if (e.keyCode == '70') 
       {
           // f
           console.log(document.getElementById("form").innerHTML = "f");
           light = "f";
        lightUp(light); 
       }

     //If the t key is pressed display t 
     else if (e.keyCode == '84') 
       {
           // t
               console.log(document.getElementById("form").innerHTML = "t");
               light = "t";
        lightUp(light);   
       }
  
     //If the g key is pressed display g 
     else if (e.keyCode == '71') 
       {
           // g
               console.log(document.getElementById("form").innerHTML = "g");
               light = "g";
        lightUp(light);
       }
    
    
  }

}


function lightUp(check)
{
  //display only the 'up' image
  if(check == "Up")
    {
      
      document.getElementById("up").style.visibility = "visible";
      document.getElementById("left").style.visibility = "hidden";
      document.getElementById("right").style.visibility = "hidden";
      document.getElementById("down").style.visibility = "hidden";
      
      document.getElementById("W").style.visibility = "hidden";
      document.getElementById("A").style.visibility = "hidden";
      document.getElementById("S").style.visibility = "hidden";
      document.getElementById("D").style.visibility = "hidden";
      
    }
  //display only the 'down' image  
  else if(check == "Down")
    {
      document.getElementById("up").style.visibility = "hidden";
      document.getElementById("left").style.visibility = "hidden";
      document.getElementById("right").style.visibility = "hidden";
      document.getElementById("down").style.visibility = "visible";
      
      document.getElementById("W").style.visibility = "hidden";
      document.getElementById("A").style.visibility = "hidden";
      document.getElementById("S").style.visibility = "hidden";
      document.getElementById("D").style.visibility = "hidden";
      
    }
    
  //display only the 'left' image  
  else if(check == "Left")
    {
      document.getElementById("up").style.visibility = "hidden";
      document.getElementById("left").style.visibility = "visible";
      document.getElementById("right").style.visibility = "hidden";
      document.getElementById("down").style.visibility = "hidden";
      
      document.getElementById("W").style.visibility = "hidden";
      document.getElementById("A").style.visibility = "hidden";
      document.getElementById("S").style.visibility = "hidden";
      document.getElementById("D").style.visibility = "hidden";
      
    }    

  //display only the 'right' image
  else if(check == "Right")
    {
      document.getElementById("up").style.visibility = "hidden";
      document.getElementById("left").style.visibility = "hidden";
      document.getElementById("right").style.visibility = "visible";
      document.getElementById("down").style.visibility = "hidden";  
      
      document.getElementById("W").style.visibility = "hidden";
      document.getElementById("A").style.visibility = "hidden";
      document.getElementById("S").style.visibility = "hidden";
      document.getElementById("D").style.visibility = "hidden";        
      
    }

  //display only the 'w' image
  else if(check == "w")
    {
      document.getElementById("up").style.visibility = "hidden";
      document.getElementById("left").style.visibility = "hidden";
      document.getElementById("right").style.visibility = "hidden";
      document.getElementById("down").style.visibility = "hidden";  
      
      document.getElementById("W").style.visibility = "visible";
      document.getElementById("A").style.visibility = "hidden";
      document.getElementById("S").style.visibility = "hidden";
      document.getElementById("D").style.visibility = "hidden";   
    }     

  //display only the 'a' image
  else if(check == "a")
    {
      document.getElementById("up").style.visibility = "hidden";
      document.getElementById("left").style.visibility = "hidden";
      document.getElementById("right").style.visibility = "hidden";
      document.getElementById("down").style.visibility = "hidden";  
      
      document.getElementById("W").style.visibility = "hidden";
      document.getElementById("A").style.visibility = "visible";
      document.getElementById("S").style.visibility = "hidden";
      document.getElementById("D").style.visibility = "hidden";   
    }  
    
    //display only the 's' image
    else if(check == "s")
    {
      document.getElementById("up").style.visibility = "hidden";
      document.getElementById("left").style.visibility = "hidden";
      document.getElementById("right").style.visibility = "hidden";
      document.getElementById("down").style.visibility = "hidden";  
      
      document.getElementById("W").style.visibility = "hidden";
      document.getElementById("A").style.visibility = "hidden";
      document.getElementById("S").style.visibility = "visible";
      document.getElementById("D").style.visibility = "hidden";   
    } 
    
    //display only the 'd' image
    else if(check == "d")
    {
      document.getElementById("up").style.visibility = "hidden";
      document.getElementById("left").style.visibility = "hidden";
      document.getElementById("right").style.visibility = "hidden";
      document.getElementById("down").style.visibility = "hidden";  
      
      document.getElementById("W").style.visibility = "hidden";
      document.getElementById("A").style.visibility = "hidden";
      document.getElementById("S").style.visibility = "hidden";
      document.getElementById("D").style.visibility = "visible";   
    } 
    
    //display only the 'r' image
    else if(check == "r")
    {
      //alert("HI");
    } 
    
    //display only the 'f' image
    else if(check == "f")
    {
      //alert("HI");
    } 
    
    //display only the 't' image
    else if(check == "t")
    {
      //alert("HI");
    } 
    
    //display only the 'g' image
    else if(check == "g")
    {
      //alert("HI");
    } 

}
//reset the images on screen
function resetimages()
{
      document.getElementById("up").style.visibility = "hidden";
      document.getElementById("down").style.visibility = "hidden";
      document.getElementById("left").style.visibility = "hidden";
      document.getElementById("right").style.visibility = "hidden";
      
      document.getElementById("W").style.visibility = "hidden";
      document.getElementById("A").style.visibility = "hidden";
      document.getElementById("S").style.visibility = "hidden";
      document.getElementById("D").style.visibility = "hidden";
}

//Websocket testing
function sendData()
{
  
  if ("WebSocket" in window) {
               alert("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
               var ws = new WebSocket("ws://localhost:9998/echo");
				
               ws.onopen = function() {
                  
                  // Web Socket is connected, send data using send()
                  ws.send("Message to send");
                  alert("Message is sent...");
               };
				
               ws.onmessage = function (evt) { 
                  var received_msg = evt.data;
                  alert("Message is received...");
               };
				
               ws.onclose = function() { 
                  
                  // websocket is closed.
                  alert("Connection is closed..."); 
               };
            } else {
              
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }


}
