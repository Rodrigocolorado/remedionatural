// ===============================
// CHECKOUT KIWIFY
// ===============================

function comprar(){

window.open("https://pay.kiwify.com.br/QIlvDZB", "_blank");

}


// ===============================
// CRONOMETRO
// ===============================

let time = 900;

function updateTimer(){

let minutes = Math.floor(time / 60);
let seconds = time % 60;

document.getElementById("countdown").innerHTML =
`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

time--;

if(time < 0){
time = 900; // reinicia
}

}

setInterval(updateTimer,1000);


// ===============================
// POPUP COMPRAS
// ===============================

const names = [

"Maria - São Paulo",
"João - Rio de Janeiro",
"Fernanda - Curitiba",
"Carlos - Porto Alegre",
"Patricia - Salvador",
"Ana - Recife",
"Juliana - Brasília",
"Roberto - Minas Gerais"

];

function showSale(){

let popup = document.getElementById("salePopup");

let random = names[Math.floor(Math.random() * names.length)];

popup.innerHTML = "✅ " + random + " acabou de comprar agora.";

popup.style.display = "block";

setTimeout(() => {

popup.style.display = "none";

},4000);

}

setInterval(showSale,8000);
