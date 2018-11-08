/*
This function checks the key input that the user inputs
and then based on the input displays the key that was pushed
*/
function Move(e)
{
  //reads the key pressed
  document.onkeydown = checkKey;
  
  //this var is used to pass to the lightUp() 
  var light = "";
  
  /*
  This function will check to see which key was pressed and then display
  the key on screen
  */
  function checkKey(e) {
  
      e = e || window.event;
  
      //If the up arrow is pressed display the up arrow
      if (e.keyCode == '38') 
        {
            // up arrow
            console.log(document.getElementById("form").innerHTML = "&#8593");
            light = "H";
            lightUp(light);
        }
      
      //If the up arrow is pressed display the up arrow  
      else if (e.keyCode == '40') 
        {
            // down arrow
            console.log(document.getElementById("form").innerHTML = "&#8595");
        }
        
      //If the up arrow is pressed display the up arrow  
      else if (e.keyCode == '37') 
        {
           // left arrow
           
        console.log(document.getElementById("form").innerHTML = "&#8592");
        }
        
      //If the up arrow is pressed display the up arrow  
      else if (e.keyCode == '39') 
        {
           // right arrow
        console.log(document.getElementById("form").innerHTML = "&#x2192");
      
        }
        
      //If the w is pressed display w
      else if (e.keyCode == '87') 
        {
        // w
        console.log(document.getElementById("form").innerHTML = 'w');
        }
      
      //If the a key is pressed display a
      else if (e.keyCode == '65') 
        {
        // a
        console.log(document.getElementById("form").innerHTML = "a");
        }
        
      //If the s key is pressed display s
      else if (e.keyCode == '83') 
        {
           // s
        console.log(document.getElementById("form").innerHTML = "s"); 
        }
      
     //If the d key is pressed display d
     else if (e.keyCode == '68') 
       {
           // d
               console.log(document.getElementById("form").innerHTML = "d");
       }

     //If the r key is pressed display r
     else if (e.keyCode == '82') 
        {
           // r
               console.log(document.getElementById("form").innerHTML = "r");    
        }

     //If the f key is pressed display f     
     else if (e.keyCode == '70') 
       {
           // f
           console.log(document.getElementById("form").innerHTML = "f"); 
       }

     //If the t key is pressed display t 
     else if (e.keyCode == '84') 
       {
           // t
               console.log(document.getElementById("form").innerHTML = "t");   
       }
  
     //If the g key is pressed display g 
     else if (e.keyCode == '71') 
       {
           // g
               console.log(document.getElementById("form").innerHTML = "g");
       }
    
    
  }

}
