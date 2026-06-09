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

        document.getElementById("music").play().catch(() => {});

    } else {

        document.getElementById("erro").innerHTML =
            "❌ Senha incorreta!<br><br>Dica: foi o dia em que uma garota chamada minha Mavi Morais começou a causar problemas no meu coração. ❤️";

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
    "Porque seu jeito me conquista todos os dias 💖",
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
function criarCoracao() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

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

setInterval(criarCoracao, 500);

window.addEventListener("load", () => {
    document.getElementById("music").play().catch((erro) => {
        console.log("Áudio bloqueado pelo navegador:", erro);
    });
});
