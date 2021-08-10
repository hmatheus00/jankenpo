
const opcoes = ['pedra', 'papel', 'tesoura'];

let pontuacaoUser = 0;
let pontuacaoMaquina = 0;

const pedra = document.getElementById('pedra');

function comparar(button){
    let posicao = parseInt(Math.random()*3);
    let maquina = opcoes[posicao];
    let opc = button.value;

    console.log(opc);
    console.log(maquina);

    switch(opc){
        case 'pedra':
            if(maquina === 'tesoura'){
                pontuacaoUser++;
            }else if(maquina === 'papel'){
                pontuacaoMaquina++;
            }
            break;
        case 'papel':
            if(maquina === 'pedra'){
                pontuacaoUser++;
            }else if(maquina === 'tesoura'){
                pontuacaoMaquina++;
            }
            break;
        case 'tesoura':
            if(maquina === 'papel'){
                pontuacaoUser++;
            }else if(maquina === 'pedra'){
                pontuacaoMaquina++;
            }
            break;
    }
    console.log('Pontuacao User - ' + pontuacaoUser);
    console.log('Pontuacao Máquina - ' + pontuacaoMaquina);
}