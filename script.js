// 1. Contador Regressivo Persistente
function startTimer(duration, display) {
    let timer = localStorage.getItem('timer') || duration;
    
    setInterval(function () {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration; // reinicia ou para
        }
        localStorage.setItem('timer', timer);
    }, 1000);
}

window.onload = function () {
    let fifteenMinutes = 60 * 15;
    let display = document.querySelector('#countdown');
    startTimer(fifteenMinutes, display);
    
    // Iniciar popups de venda aleatórios
    setTimeout(showSalePopup, 3000);
};

// 2. Simulação de Prova Social (Popups)
const names = ["Ricardo G.", "Ana P.", "Luciana M.", "Marcos V.", "Sônia R.", "Felipe A."];
const cities = ["São Paulo", "Rio de Janeiro", "Curitiba", "Belo Horizonte", "Salvador"];

function showSalePopup() {
    const popup = document.getElementById('salePopup');
    const name = names[Math.floor(Math.random() * names.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    
    popup.innerHTML = `✅ <strong>${name}</strong> (${city}) acabou de adquirir o guia!`;
    popup.style.display = 'flex';
    
    setTimeout(() => {
        popup.style.display = 'none';
        // agenda o próximo popup para daqui a 10 a 20 segundos
        setTimeout(showSalePopup, Math.floor(Math.random() * 10000) + 10000);
    }, 5000);
}

// 3. Função de Compra (Simulação)
function comprar() {
    // Aqui você insere o link da sua página de pagamento (Hotmart, Kiwify, etc)
    window.location.href = "https://seulinkdepagamento.com"; 
}
