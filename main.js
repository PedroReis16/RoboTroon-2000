const parte = document.querySelectorAll('.parte');
const soma = document.querySelectorAll('.somar');
const sub = document.querySelectorAll('.subtrair');
const estatistica = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const forca = document.querySelector('.forca');
const velocidade = document.querySelector('.velocidade');
const energia = document.querySelector('.energia');
const poder = document.querySelector('.poder');

const strength = forca.textContent;
const speed = velocidade.textContent;
const energy = energia.textContent;
const power =  poder.textContent;


for(let i=0;i<soma.length;i++){
    const mais = soma[i];
    const menos = sub[i]
    const componente = parte[i];

    mais.addEventListener("click",()=>{

        componente.value = parseInt(componente.value) +1;
        
        let quantidade = componente.value;

        AtualizandoDados(i,quantidade);
    });

    menos.addEventListener("click",()=>{
        componente.value = parseInt(componente.value) - 1;
       
        let quantidade = componente.value;
        
        if(componente.value <= 0)
        {
            quantidade = 0;
            
            componente.value = "00";
        }
        AtualizandoDados(i,quantidade);
        
    });
}

function AtualizandoDados(parte,quantidade){

    if(parte === 0){
        forca.innerHTML = parseInt(strength)+(pecas.bracos['forca']) * quantidade;
        velocidade.innerHTML = parseInt(speed) + (pecas.bracos['velocidade'] )* quantidade;
        energia.innerHTML = parseInt(energy) + (pecas.bracos['energia'] )* quantidade;
        poder.innerHTML = parseInt(power) + (pecas.bracos['poder'] )* quantidade;
    }
    if(parte === 1){
        forca.innerHTML = parseInt(strength)+(pecas.blindagem['forca'] )* quantidade;
        velocidade.innerHTML = parseInt(speed) + (pecas.blindagem['velocidade'] )* quantidade;
        energia.innerHTML = parseInt(energy) + (pecas.blindagem['energia'] )* quantidade;
        poder.innerHTML = parseInt(power) + (pecas.blindagem['poder'] )* quantidade;
    }
    if(parte === 2){
        forca.innerHTML = parseInt(strength)+(pecas.nucleos['forca'] )* quantidade;
        velocidade.innerHTML = parseInt(speed) + (pecas.nucleos['velocidade'] )* quantidade;
        energia.innerHTML = parseInt(energy) + (pecas.nucleos['energia'] )* quantidade;
        poder.innerHTML = parseInt(power) + (pecas.nucleos['poder'] )* quantidade;
    }
    if(parte === 3){
        forca.innerHTML = parseInt(strength)+(pecas.pernas['forca'] )* quantidade;
        velocidade.innerHTML = parseInt(speed) + (pecas.pernas['velocidade'] )* quantidade;
        energia.innerHTML = parseInt(energy) + (pecas.pernas['energia'] )* quantidade;
        poder.innerHTML = parseInt(power) + (pecas.pernas['poder'] )* quantidade;
    }
    if(parte === 4){
        forca.innerHTML = parseInt(strength)+(pecas.foguetes['forca'] )* quantidade;
        velocidade.innerHTML = parseInt(speed) + (pecas.foguetes['velocidade'] )* quantidade;
        energia.innerHTML = parseInt(energy) + (pecas.foguetes['energia'] )* quantidade;
        poder.innerHTML = parseInt(power) + (pecas.foguetes['poder'] )* quantidade;
    }
}
