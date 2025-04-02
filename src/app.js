function generateRandomCard () {
  let arrPalos = ["heart", "spade", "clubs", "diamond"];
  let number = Math.floor(Math.random()*13)+1;
  let formattedNumber = number;
  switch(number)
  {
    case (1):
      formattedNumber = "AS";
      break;
    case(11):
      formattedNumber = "J";
      break;
    case (12):
      formattedNumber = "Q";
      break;
    case (13):
      formattedNumber = "K";
      break;
    default:
      break;
  }
  let palo =  arrPalos[Math.floor(Math.random()*arrPalos.length)];

  console.log(palo);
  //Seleccionamos palo
  
  //let paloInCard= document.getElementsByClassName(palo)[0];
  //paloInCard.style.display = "flex";
  document.getElementsByClassName(palo)[0].style.display = "flex";
  document.getElementsByClassName(palo)[1].style.display = "flex";

  for (let element of arrPalos){
    if (element != palo){
      document.getElementsByClassName(element)[0].style.display= "none";
      document.getElementsByClassName(element)[1].style.display= "none";
     }
  }
  // sobreescribimos número de carta
  let numberValue = document.getElementsByClassName("numberValue")[0];
  numberValue.innerHTML = formattedNumber;
  if (palo== "heart" || palo == "diamond") { 
   numberValue.style.color = "red";
  } else numberValue.style.color = "black";

}

let intervalID= 0;


function periodicRandomCard(){
  var myCheckbox = document.getElementsByName("timer")[0];
  var myInputtime = document.getElementsByName("inputTime")[0];
  clearInterval(intervalID)

  if (myCheckbox.checked == true){
    intervalID= setInterval(generateRandomCard,parseInt(myInputtime.value)*1000);
  } 
}

function adjustHeight(){
  var newHeight = document.getElementsByName("inputHeight")[0];
  document.getElementsByClassName("card")[0].style.height = newHeight.value + "%";
}

function adjustWidth(){
  var newWidth = document.getElementsByName("inputWidth")[0];
  document.getElementsByClassName("card")[0].style.width = newWidth.value + "%";
}

