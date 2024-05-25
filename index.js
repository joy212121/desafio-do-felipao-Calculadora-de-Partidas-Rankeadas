function calcularNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

function calculadoraRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = calcularNivel(vitorias);
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso
let vitorias = 45;
let derrotas = 20;
let resultado = calculadoraRank(vitorias, derrotas);
console.log(resultado);
