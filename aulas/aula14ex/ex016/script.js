function contar() {
    // Referências diretas aos elementos de input
    let iniInput = document.getElementById("txti");
    let fimInput = document.getElementById('txtf');
    let passoInput = document.getElementById('txtp');
    let res = document.getElementById('res');

    // Verifica se algum campo está vazio (length === 0)
    if (iniInput.value.length === 0 || fimInput.value.length === 0 || passoInput.value.length === 0) {
        window.alert('[ERRO] Faltam dados!');
        res.innerHTML = 'Impossível contar!';
        return; // Interrompe a execução da função
    } else {
        res.innerHTML = 'Contando: <br>'; // Adiciona quebra de linha para melhor visualização

        // Converte os valores dos inputs para números
        let i = Number(iniInput.value);
        let f = Number(fimInput.value);
        let p = Number(passoInput.value);

        // Validação de passo: se for 0 ou negativo, ajusta para 1
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.');
            p = 1;
        }

        // Contagem Progressiva (Início menor que Fim)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `; // Adiciona emoji de mãozinha apontando
            }
        } 
        // Contagem Regressiva (Início maior ou igual ao Fim)
        else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `; // Adiciona emoji de mãozinha apontando
            }
        }
        
        res.innerHTML += `\u{1F3C1}`; // Adiciona emoji de bandeira (fim)
    }
}