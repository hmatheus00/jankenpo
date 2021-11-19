
const opcoes = ['pedra', 'papel', 'tesoura'];

let pontuacaoUser = 0;
let pontuacaoMaquina = 0;

const frasePronta = document.getElementById('frase-pronta');

const placarUser = document.getElementById('placar-usuario');
const placarMaquina = document.getElementById('placar-maquina');

function comparar(button) {
    let posicao = parseInt(Math.random() * 3);
    let maquina = opcoes[posicao];
    let opc = button.value;

    frasePronta.innerText = `Você escolheu ${opc} e a máquina escolheu ${maquina}.`;

    switch (opc) {
        case 'pedra':
            if (maquina === 'tesoura') {
                placarUser.innerText = ++pontuacaoUser;
            } else if (maquina === 'papel') {
                placarMaquina.innerText = ++pontuacaoMaquina;
            }
            break;
        case 'papel':
            if (maquina === 'pedra') {
                placarUser.innerText = ++pontuacaoUser;
            } else if (maquina === 'tesoura') {
                placarMaquina.innerText = ++pontuacaoMaquina;
            }
            break;
        case 'tesoura':
            if (maquina === 'papel') {
                placarUser.innerText = ++pontuacaoUser;
            } else if (maquina === 'pedra') {
                placarMaquina.innerText = ++pontuacaoMaquina;
            }
            break;
    }

}