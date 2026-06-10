function entrar() {
    if (document.getElementById("senha").value === "6755lx7") {

        const login = document.getElementById("login");
const conteudo = document.getElementById("conteudo");

login.classList.add("fade-out");

setTimeout(() => {

    login.style.display = "none";

    conteudo.classList.remove("hidden");
    conteudo.classList.add("fade-in");
    conteudo.style.opacity = "1";

    document.getElementById("music").play().catch(() => {});

}, 1200);


    } else {

        document.getElementById("erro").innerHTML =
            "❌ Senha incorreta!<br><br>Dica: foi o dia em que uma garota chamada Mavi Morais começou a causar problemas no meu coração. ❤️";

    }
}


// CONTADOR DIA DOS NAMORADOS
function countdown() {

    const agora = new Date();

    let alvo = new Date(agora.getFullYear(), 5, 12, 0, 0, 0);

    if (agora > alvo) {
        alvo = new Date(agora.getFullYear() + 1, 5, 12, 0, 0, 0);
    }

    const diff = alvo - agora;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const segundos = Math.floor(diff / 1000) % 60;

    document.getElementById("d").textContent = dias;
    document.getElementById("h").textContent = horas;
    document.getElementById("m").textContent = minutos;
    document.getElementById("s").textContent = segundos;
}

setInterval(countdown, 1000);
countdown();


// CONTADOR DE RELACIONAMENTO
function tempo() {

    const inicio = new Date("2026-05-23T00:00:00");
    const agora = new Date();

    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const segundos = Math.floor(diff / 1000) % 60;

    document.getElementById("tempo").innerHTML = `

        <div class="love-box">
            <span class="love-number">${dias}</span>
            <span class="love-label">Dias</span>
        </div>

        <div class="love-box">
            <span class="love-number">${horas}</span>
            <span class="love-label">Horas</span>
        </div>

        <div class="love-box">
            <span class="love-number">${minutos}</span>
            <span class="love-label">Minutos</span>
        </div>

        <div class="love-box">
            <span class="love-number">${segundos}</span>
            <span class="love-label">Segundos</span>
        </div>

    `;
}

setInterval(tempo, 1000);
tempo();


// MOTIVOS ALEATÓRIOS
const lista = [
"Porque seu sorriso ilumina meus dias ❤️",
"Porque conversar com você é a melhor parte da minha rotina 💕",
"Porque você me faz feliz sem nem perceber ✨",
"Porque adoro ouvir sua voz 🎶",
"Porque você me entende como ninguém 💖",
"Porque seu carinho aquece meu coração ❤️",
"Porque você é linda por dentro e por fora 🌹",
"Porque cada momento ao seu lado é especial 💘",
"Porque você me faz querer ser uma pessoa melhor ✨",
"Porque eu amo o seu jeito único ❤️",
"Porque você transformou meus dias 🥰",
"Porque sua risada é viciante 😍",
"Porque eu penso em você o tempo todo ❤️",
"Porque você me traz paz 🌷",
"Porque você é meu lugar favorito 💕",
"Porque você faz qualquer dia ficar melhor ✨",
"Porque você acredita em mim ❤️",
"Porque você faz meu coração acelerar 💓",
"Porque sua presença faz diferença 🌹",
"Porque eu amo passar tempo com você 💖",
"Porque você me faz sorrir sem motivo 😊",
"Porque você é meu pensamento favorito ❤️",
"Porque você me inspira todos os dias ✨",
"Porque você é incrível 💕",
"Porque você deixa tudo mais leve 🌸",
"Porque você é carinhosa ❤️",
"Porque adoro sua companhia 💖",
"Porque você me faz sentir especial 💘",
"Porque você me dá forças 🌹",
"Porque você é meu porto seguro ⚓",
"Porque você é minha paz ❤️",
"Porque sua felicidade importa para mim 💕",
"Porque você me faz rir 😂",
"Porque você é gentil 🌷",
"Porque adoro nossas conversas ❤️",
"Porque você sempre surpreende 💖",
"Porque você me faz sonhar ✨",
"Porque você é minha pessoa favorita 🥰",
"Porque você é única ❤️",
"Porque você me entende só pelo olhar 👀",
"Porque adoro suas mensagens 💌",
"Porque você faz meu mundo melhor 🌎",
"Porque você me apoia 💕",
"Porque adoro o jeito que você fala ❤️",
"Porque você me faz sentir amado 💘",
"Porque você é linda 🌹",
"Porque você é inteligente ✨",
"Porque você é engraçada 😂",
"Porque adoro compartilhar momentos com você ❤️",
"Porque você me completa 💖",
"Porque você me faz acreditar no amor 💕",
"Porque você é especial 🌸",
"Porque você me inspira confiança ❤️",
"Porque adoro quando você sorri 😍",
"Porque você deixa tudo mais bonito 🌹",
"Porque você é meu lugar feliz 💘",
"Porque adoro estar ao seu lado ❤️",
"Porque você é doce 🍬",
"Porque você é forte 💪",
"Porque você nunca sai dos meus pensamentos 💭",
"Porque você é meu presente favorito 🎁",
"Porque você me faz querer o futuro ❤️",
"Porque você faz meu coração sorrir 💖",
"Porque adoro cuidar de você 🌷",
"Porque você me faz sentir vivo ✨",
"Porque você é meu amor ❤️",
"Porque você me faz acreditar em coisas boas 🌹",
"Porque você é maravilhosa 💕",
"Porque adoro nossos momentos juntos 🥰",
"Porque você é meu melhor acaso ❤️",
"Porque você é meu sonho realizado 💘",
"Porque você é minha inspiração ✨",
"Porque adoro sua personalidade ❤️",
"Porque você é sincera 💖",
"Porque você me faz sentir em casa 🏡",
"Porque você é meu refúgio 🌹",
"Porque você me faz querer sorrir 😊",
"Porque você é a melhor parte do meu dia ❤️",
"Porque adoro seus detalhes 💕",
"Porque você faz meu coração bater mais forte 💓",
"Porque você é inesquecível 🌷",
"Porque você é meu sol em dias nublados ☀️",
"Porque você me traz alegria ❤️",
"Porque você é meu capítulo favorito 📖",
"Porque adoro tudo em você 💖",
"Porque você faz minha vida melhor 🌹",
"Porque você é meu pensamento antes de dormir 🌙",
"Porque você é meu pensamento ao acordar ☀️",
"Porque você me faz sentir sorte 🍀",
"Porque você é meu motivo para sorrir ❤️",
"Porque você me faz acreditar em para sempre 💕",
"Porque você é a dona do meu coração 💘",
"Porque você faz cada dia valer a pena 🌹",
"Porque você é meu maior presente 🎁",
"Porque você é minha felicidade ❤️",
"Porque você é minha Bruxinha favorita 🧙‍♀️💖",
"Porque eu amo tudo em você ❤️",
"Porque eu simplesmente amo você ❤️"
];

function motivo() {

    document.getElementById("motivo").textContent =
        lista[Math.floor(Math.random() * lista.length)];

}


// PARTÍCULAS
const c = document.getElementById("particles");
const x = c.getContext("2d");

function resize() {

    c.width = window.innerWidth;
    c.height = window.innerHeight;

}

resize();

window.onresize = resize;

let p = [...Array(150)].map(() => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 2 + 1,
    v: Math.random() * 1 + 0.2
}));

(function animate() {

    x.clearRect(0, 0, c.width, c.height);

    x.fillStyle = "rgba(255,150,200,0.8)";

    p.forEach(o => {

        x.beginPath();
        x.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        x.fill();

        o.y -= o.v;

        if (o.y < 0) {

            o.y = c.height;
            o.x = Math.random() * c.width;

        }

    });

    requestAnimationFrame(animate);

})();

// CORAÇÕES FLUTUANDO
const coracoes = ["❤️","💖","💕","💘","💝"];

function criarCoracao() {

    const heart = document.createElement("div");

    heart.innerHTML =
        coracoes[Math.floor(Math.random() * coracoes.length)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-50px";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    heart.style.opacity = Math.random() * 0.5 + 0.5;

    document.body.appendChild(heart);

    const duracao = Math.random() * 3000 + 4000;
    const deslocamento = (Math.random() - 0.5) * 200;

    heart.animate(
        [
            {
                transform: "translate(0,0) scale(1)",
                opacity: 1
            },
            {
                transform: `translate(${deslocamento}px,-120vh) scale(1.5)`,
                opacity: 0
            }
        ],
        {
            duration: duracao,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, duracao);
}

document.addEventListener("DOMContentLoaded", () => {

setInterval(criarCoracao, 500);

function criarCoracoes() {
for(let i = 0; i < 15; i++){
criarCoracao();
}
}

const simbolos = [
"❤️",
"❤️",
"❤️",
"🌹",
"💌",
"🥰",
"💖",
"✨"
];

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

const resultado = document.getElementById("resultado");
const girar = document.getElementById("girar");

if (!slot1 || !slot2 || !slot3 || !resultado || !girar) return;

function simboloAleatorio(){
return simbolos[Math.floor(Math.random() * simbolos.length)];
}

girar.addEventListener("click", () => {

    girar.disabled = true;
    resultado.textContent = "";

    let tempo1 = setInterval(() => {
        slot1.textContent = simboloAleatorio();
    }, 100);

    let tempo2 = setInterval(() => {
        slot2.textContent = simboloAleatorio();
    }, 100);

    let tempo3 = setInterval(() => {
        slot3.textContent = simboloAleatorio();
    }, 100);

    setTimeout(() => {
        clearInterval(tempo1);
        slot1.textContent = simboloAleatorio();
    }, 1500);

    setTimeout(() => {
        clearInterval(tempo2);
        slot2.textContent = simboloAleatorio();
    }, 2200);

    setTimeout(() => {
        clearInterval(tempo3);
        slot3.textContent = simboloAleatorio();

        verificarResultado();

        girar.disabled = false;

    }, 2900);

});

function verificarResultado(){

    const s1 = slot1.textContent;
    const s2 = slot2.textContent;
    const s3 = slot3.textContent;

    if(
        (s1 === s2) ||
        (s1 === s3) ||
        (s2 === s3)
    ){

        criarCoracoes();

        if(s1 === "❤️" || s2 === "❤️" || s3 === "❤️"){
            resultado.textContent = "Você ganhou meu coração ❤️";
        }
        else if(s1 === "🌹" || s2 === "🌹" || s3 === "🌹"){
            resultado.textContent = "Vale um beijo 💋";
        }
        else if(s1 === "💌" || s2 === "💌" || s3 === "💌"){
            resultado.textContent = "Uma carta cheia de amor 💌";
        }
        else if(s1 === "🥰" || s2 === "🥰" || s3 === "🥰"){
            resultado.textContent = "Vale um abraço gigante 🤗";
        }
        else if(s1 === "💖" || s2 === "💖" || s3 === "💖"){
            resultado.textContent = "Você é meu tesouro 💖";
        }
        else{
            resultado.textContent = "Seu desejo foi aprovado ✨";
        }

    } else {
        resultado.textContent = "Tente novamente ❤️";
    }
}

});

let totalAmor = 0;

function clicarCoracao() {

    totalAmor++;

    document.getElementById("contadorAmor").innerHTML =
        `Eu te amo x${totalAmor} ❤️`;

    for(let i = 0; i < 5; i++){
        criarCoracao();
    }

    if(totalAmor === 10){
        alert("🥰 Você já recebeu 10 eu te amos!");
    }

    if(totalAmor === 50){
        alert("💖 Seu estoque de amor está aumentando!");
    }

    if(totalAmor === 100){
        alert("🏆 Nível máximo de fofura atingido!");
    }
}
