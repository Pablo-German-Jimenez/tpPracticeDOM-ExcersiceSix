let tiempo;     
let intervalo;   

function start() {
 
  if (!intervalo) {
 
    tiempo = parseInt(document.getElementById("inputUser").value);

 
    document.getElementById("screen").textContent = tiempo;

  setInterval(() => {
      tiempo--;
      document.getElementById("screen").textContent = tiempo;

      if (tiempo <= 0) {
        clearInterval(intervalo);
        intervalo = null;
      }
    }, 1000); 
  }
}

function pause() {
  clearInterval(intervalo); 
  intervalo = null;
}

function reset() {
  pause();                                
  document.getElementById("inputUser").value = "";  
  document.getElementById("screen").textContent = "0"; 
}