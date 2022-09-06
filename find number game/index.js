let computerGuess;
let UserGuess =[];
let usernumberupdate= document.getElementById("inputbox");

const init=()=>{
    computerGuess=Math.floor(Math.random()*100);
    document.getElementById("gamearea").style.display="none";
    document.getElementById("newgamebutton").style.display="none";
}
//relode page
const newgame =()=>{
    window.location.reload();
}

let showgame=()=>{
    document.getElementById("welcomescreen").style.display="none";
    document.getElementById("gamearea").style.display="block"; 

}
// starat new game 
const startnewgame=()=>{
    document.getElementById("newgamebutton").style.display="inline";
    usernumberupdate.setAttribute('disabled',true)
}


//main  button code
const compairgame=()=>{
    const Usernumber= Number(document.getElementById("inputbox").value);
    UserGuess=[...UserGuess, Usernumber];
    document.getElementById("Guesses").innerHTML=UserGuess;
  console.log(maxvalue);
 if( UserGuess.length<maxvalue) 
 {
 if(Usernumber>computerGuess)
  {
      document.getElementById("textoutput").innerHTML="youe Answer is High";
      usernumberupdate.value="";
  }  
  else if(Usernumber<computerGuess)
  {
    document.getElementById("textoutput").innerHTML="youe Answer is low";
    usernumberupdate.value="";
  }
  else{
    document.getElementById("textoutput").innerHTML="ohhh !your answer is right";
    usernumberupdate.value="";
    startnewgame();
  }
}
else
{
    if(Usernumber>computerGuess)
  {
      document.getElementById("textoutput").innerHTML=`your current number was ${computerGuess}`;
      usernumberupdate.value="";
      startnewgame();
  }  
  else if(Usernumber<computerGuess)
  {
    document.getElementById("textoutput").innerHTML=`your current number was ${computerGuess}`;
    usernumberupdate.value="";
    startnewgame();
  }
  else{
    document.getElementById("textoutput").innerHTML="ohhh !your answer is right";
    usernumberupdate.value="";
    startnewgame();
  }

};
  document.getElementById("attempts").innerHTML=UserGuess.length;
};




//button event
easygame=()=>{
    maxvalue=10;
    showgame();
}
Hardgame=()=>{
    maxvalue=5;
    showgame();
}