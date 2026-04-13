var menuItens = document.getElementById("menuItens")

menuItens.style.maxHeight = "0px";

function menucelular() {
    if(menuItens.style.maxHeight == "0px"){
menuItens.style.maxHeight = "200px";
    }else{
        menuItens.style.maxHeight = "0px";

    }
}

const menuToggle = document.getElementById('menuToggle');
        const menu = document.getElementById('menu');

        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
        }

        // WhatsApp - Serviços Residenciais
        const cardServicos = document.getElementById('servicos');
    
        if (cardServicos) {
            cardServicos.addEventListener('click', function() {
                const numero = '5547997327311';
                const mensagem = encodeURIComponent('Olá! Gostaria de mais informações sobre a loja. Podem me ajudar?');
                window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
            });
        }