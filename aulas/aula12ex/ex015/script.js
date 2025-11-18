function vr() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano').value;
    var res = document.querySelector('div#res');
    if (fano.length == 0 || fano > ano) {
        window.alert('Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano);
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex.length > 0 && fsex[0].checked) {
            genero = 'Homem';
            if(idade>=0 && idade<10){
                img.setAttribute('src', 'homem-bebe.jpg')
            }else if(idade < 21){
                img.setAttribute('src', 'homem-jovem.jpg')
            }else if(idade<50){
                img.setAttribute('src', 'homem-adulto.jpg')
            }else{
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex.length > 1 && fsex[1].checked) {
            genero = 'Mulher';
            if(idade>=0 && idade<10){
                img.setAttribute('src', 'mulher-bebe.jpg') // CORRIGIDO
            }else if(idade < 21){
                img.setAttribute('src', 'mulher-jovem.jpg') // CORRIGIDO
            }else if(idade<50){
                img.setAttribute('src', 'mulher-adulta.jpg') // CORRIGIDO
            }else{
                img.setAttribute('src', 'mulher-idosa.jpg') // CORRIGIDO
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img); // ADICIONADO: anexa a imagem ao resultado
    }
}
