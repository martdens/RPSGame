
var options = ["r", "p", "s"];
                   var wins = 0;
                   var ties = 0;
                   var losses = 0;
                document.onkeyup = function() {  
                   var userguess = String.fromCharCode(event.keyCode).toLowerCase();
                   
                   console.log(userguess);
            
                var computerGuess = options[Math.floor(Math.random()*options.length)];
                        console.log(computerGuess); }



                   if(userguess =='r' || userguess =='p' || userguess =='s') 
              {
                   if((userguess=='r') &&(computerGuess=='s')) {
                   win++;
                   alert("wins: " + wins);
                   } 

                   if((userguess=='r') && (computerGuess=='p')) {
                   win++;
                   alert("wins: " + wins);
                   } 
 
                  if((userguess=='s') && (computerGuess=='p')) {
                  win++;
                  alert("wins: " + wins);
                  }

                  if((userguess=='r') && (computerGuess=='s')) {
                  losses++;
                  alert("losses: "+ losses);
                  } 

                  if((userguess=='s') && (computerGuess=='r')) {
                  losses++;
                  alert("losses: "+losses);
                  }


                  if((userguess=='p') && (computerGuess=='r')) {
                  win++;
                  alert("win: "+ win);
                  }

                  if((userguess==computerGuess)) {
                  ties++;
                  alert("ties: "+ ties);
                  } 
                    }else {
                  alert("please choose r, p, s");
              }
                 
        
        var html = "<p>Press r, p, or s to start playing </p>" +
        "<p>wins:  "+ wins + "</p>" +
        "<p>losses:  "+ losses +"</p>"+                                                                                                                 
        "<p>ties:  "+ ties + "</p>";

        document.querySelector("#game").innerHTML=html;
    
      