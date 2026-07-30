import { perguntas, etapas } from './data.js';
import { normalizar, validarResposta } from './logic.js';

// ===============================
let etapaIndex = 0;
const respostas = {};

// ===============================
const chat = document.getElementById("chat");
const input = document.getElementById("input");
const btnEnviar = document.getElementById("btnEnviar");
const btnReiniciar = document.getElementById("btnReiniciar");
const resumoEmpty = document.getElementById("resumoEmpty");

const ICONE_ASSISTENTE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1.5L6 18l1.5 3 1.5-1v-3l3-2 4.5 4.5c.3.4.9.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/></svg>`;

// ===============================
function adicionarMensagem(texto, tipo) {
    const linha = document.createElement("div");
    linha.classList.add("msg-row", tipo);

    if (tipo === "bot") {
        const icone = document.createElement("span");
        icone.classList.add("msg-icon");
        icone.innerHTML = ICONE_ASSISTENTE;
        linha.appendChild(icone);
    }

    const bolha = document.createElement("div");
    bolha.classList.add("msg", tipo);
    bolha.textContent = texto;
    linha.appendChild(bolha);

    chat.appendChild(linha);
    chat.scrollTop = chat.scrollHeight;
}

// ===============================
function atualizarResumo() {
    etapas.forEach((etapa, i) => {
        const campo = document.getElementById("r" + i);
        if (campo && respostas[etapa]) {
            campo.textContent = respostas[etapa];
            campo.parentElement.classList.add("preenchido");
        }
    });
    resumoEmpty.classList.toggle("hidden", Object.keys(respostas).length > 0);
}

// ===============================
function enviar() {

    const respostaBruta = input.value.trim();
    const resposta = normalizar(respostaBruta);

    if (!resposta) return;

    adicionarMensagem(respostaBruta, "user");

    const chaveAtual = etapas[etapaIndex];

    if (validarResposta(resposta, chaveAtual)) {

        respostas[chaveAtual] = respostaBruta;
        atualizarResumo();
        etapaIndex++;

        if (etapaIndex < perguntas.length) {
            const proximoIndex = etapaIndex;
            setTimeout(() => {
                adicionarMensagem(perguntas[proximoIndex], "bot");
            }, 400);
        } else {
            setTimeout(() => {
                adicionarMensagem("✅ Reserva concluída!", "bot");
            }, 400);
        }

    } else {
        adicionarMensagem("❌ Não entendi, tente novamente.", "bot");
    }

    input.value = "";
}

// ===============================
function reiniciar() {
    etapaIndex = 0;
    for (const chave in respostas) delete respostas[chave];

    chat.innerHTML = "";
    etapas.forEach((_, i) => {
        const campo = document.getElementById("r" + i);
        if (campo) {
            campo.textContent = "";
            campo.parentElement.classList.remove("preenchido");
        }
    });
    resumoEmpty.classList.remove("hidden");

    input.value = "";
    adicionarMensagem(perguntas[etapaIndex], "bot");
}

// ===============================
btnEnviar.addEventListener("click", enviar);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") enviar();
});

btnReiniciar.addEventListener("click", reiniciar);

// ===============================
adicionarMensagem(perguntas[etapaIndex], "bot");