let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#rse')
let valores = []
function isNumero(n){
    if (Number(n)>=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){
        window.alert('Tudo OK')
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}