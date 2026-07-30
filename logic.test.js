import { describe, it, expect } from 'vitest';
import { normalizar, validarResposta } from './logic.js';

describe('normalizar', () => {
    it('converte para minúsculas', () => {
        expect(normalizar('PORTUGAL')).toBe('portugal');
    });

    it('remove acentos', () => {
        expect(normalizar('Espanha')).toBe('espanha');
        expect(normalizar('Grécia')).toBe('grecia');
        expect(normalizar('São Paulo')).toBe('sao paulo');
    });

    it('mantém espaços e hífens', () => {
        expect(normalizar('Estados Unidos')).toBe('estados unidos');
        expect(normalizar('Segunda-feira')).toBe('segunda-feira');
    });
});

describe('validarResposta', () => {
    it('aceita um destino válido', () => {
        expect(validarResposta('brasil', 'destino')).toBe(true);
        expect(validarResposta('portugal', 'destino')).toBe(true);
    });

    it('rejeita um destino que não está na lista', () => {
        expect(validarResposta('marte', 'destino')).toBe(false);
    });

    it('reconhece o destino mesmo dentro de uma frase (match por substring)', () => {
        expect(validarResposta('quero ir para o brasil', 'destino')).toBe(true);
    });

    it('aceita quantidade de pessoas em número ou por extenso', () => {
        expect(validarResposta('2', 'pessoas')).toBe(true);
        expect(validarResposta('duas', 'pessoas')).toBe(true);
        expect(validarResposta('dez', 'pessoas')).toBe(false);
    });

    it('valida o tipo de assento', () => {
        expect(validarResposta('executivo', 'assento')).toBe(true);
        expect(validarResposta('primeira classe vip', 'assento')).toBe(true);
        expect(validarResposta('camarote', 'assento')).toBe(false);
    });

    it('valida o dia da semana', () => {
        expect(validarResposta('segunda', 'dia')).toBe(true);
        expect(validarResposta('sexta-feira', 'dia')).toBe(true);
        expect(validarResposta('feriado', 'dia')).toBe(false);
    });

    it('valida a resposta sobre o pacote turístico', () => {
        expect(validarResposta('sim', 'pacote')).toBe(true);
        expect(validarResposta('talvez', 'pacote')).toBe(true);
        expect(validarResposta('nao', 'pacote')).toBe(true);
    });
});
