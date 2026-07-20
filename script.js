// Timer Persistente
(function(){
    const display = document.querySelector('#countdown');
    let timer = localStorage.getItem('site_timer') || (15 * 60);
    setInterval(() => {
        let min = parseInt(timer / 60, 10);
        let sec = parseInt(timer % 60, 10);
        display.textContent = `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
        if (--timer < 0) timer = 15 * 60;
        localStorage.setItem('site_timer', timer);
    }, 1000);
})();

// Card Flutuante Topo
window.addEventListener('load', () => {
    const card = document.getElementById('promoCard');
    const closeBtn = document.getElementById('closePromo');
    setTimeout(() => { if(!sessionStorage.getItem('cardClosed')) card.classList.add('active'); }, 2000);
    closeBtn.onclick = () => { card.classList.remove('active'); sessionStorage.setItem('cardClosed', 'true'); };
});

// Social Proof
(function(){
    const popup = document.getElementById('salePopup');
    const names = ["Ricardo", "Ana", "Luciana", "Marcos", "Sônia"];
    function show() {
        popup.innerHTML = `✅ <strong>${names[Math.floor(Math.random()*names.length)]}</strong> acabou de comprar!`;
        popup.style.display = 'block';
        setTimeout(() => { popup.style.display = 'none'; }, 4000);
    }
    setInterval(show, 12000);
})();

function comprar() { window.location.href = "https://pay.kiwify.com.br/6G8apvn"; }
