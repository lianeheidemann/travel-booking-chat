import { palavrasChave } from './data.js';

export function normalizar(texto) {
    return texto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export function validarResposta(resposta, chave) {
    return palavrasChave[chave]
        .some(p => resposta.includes(p));
}
