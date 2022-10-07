/*__________________Déclaration variables_____________*/

let zoneLu = document.querySelector(".zoneLu");
let zoneEcris = document.querySelector(".zoneEcris");
let count = 0;
let progressBar = document.querySelector(".progress");
let btn_gras = document.querySelector(".gras");
let btn_italic = document.querySelector(".italic");
let btn_souligne = document.querySelector(".souligne");
let btn_darkMode = document.querySelector(".darkMode");
let btn_effacer = document.querySelector(".effacer");
let toggleTheme = 0;
/*__________Fonction changement texte________*/

zoneEcris.addEventListener("keyup", () => {
  zoneLu.innerHTML = zoneEcris.value;
});
/*__________Fonction blocage zone________________*/

zoneEcris.addEventListener("keyup", () => {
  if(zoneLu.textContent.length >= 200){
  zoneEcris.setAttribute("maxlength" , "0");
}else if(zoneLu.textContent.length <= 200){
  zoneEcris.removeAttribute("maxlength");
}})

/*______________Fonction barre de progression__________*/

zoneEcris.addEventListener("keyup", () => {
  count = zoneLu.textContent.length;
  progressBar.style.width = count * 0.5 + "%";
  if (count > 0 && count <= 100) {
    progressBar.style.backgroundColor = "green";
  } else if (count >= 101 && count <= 170) {
    progressBar.style.backgroundColor = "orange";
  } else {
    progressBar.style.backgroundColor = "red";
  }
});
/*________________Fonction loader__________________*/

zoneEcris.addEventListener("mousemove", () => {
  zoneEcris.style.cursor = "wait";
});
/*__________________ Bouton Gras__________________*/

btn_gras.addEventListener("click", () => {
  zoneEcris.value += "<strong></strong>";
});
/*__________________Bouton Italic__________________*/

btn_italic.addEventListener("click", () => {
  zoneEcris.value += "<i></i>";
});
/*__________________Bouton souligné__________________*/

btn_souligne.addEventListener("click", () => {
  zoneEcris.value += "<u></u>";
});
/*__________________Dark Mode__________________*/

btn_darkMode.addEventListener("click", () => {
  if (toggleTheme === 0) {
    btn_darkMode.innerHTML = "Dark Mode Activé";
    document.documentElement.style.setProperty("--ecriture", "#f1f1f1");
    document.documentElement.style.setProperty("--background", "#262626");
    document.documentElement.style.setProperty("--border", "#f1f1f1");
    toggleTheme++;
  } else {
    document.documentElement.style.setProperty("--ecriture", "#262626");
    document.documentElement.style.setProperty("--background", "#f1f1f1");
    document.documentElement.style.setProperty("--border", "#262626");
    ;
    btn_darkMode.innerHTML = "Light Mode Activé";
    toggleTheme--;
  }
});
/*__________________POP UP__________________*/

zoneEcris.addEventListener("keypress", () => {
  if (zoneLu.textContent.length >= 200) {
    alert("Attention le maximum de caractére est atteint!!");
  }
});
/*__________________Fonction Effacer__________________*/

btn_effacer.addEventListener("click", () => {
  zoneEcris.value = "";
  zoneLu.textContent = "";
  progressBar.style.width = "";
});

