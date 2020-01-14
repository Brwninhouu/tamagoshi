// codigo retirado de mim mesmo pq sou inteligente.
var nome = "Brwninhouu";
var saude = 50;
var fome = 50;
var tempo = 0;//ARRUMAR UM JEITO DE CHAMAR A FUNÇÃO DANO QUANDO O TEMPO MUDAR

setInterval(display, 2000);//1000 = 1seg
display();

function display() {
    tempo++
    if (tempo >= 2) dano()
    document.getElementById("tempo").innerHTML = "Tempo: " + tempo
    document.getElementById("saude").innerHTML = "Saude: " + saude
    document.getElementById("fome").innerHTML = "Fome: " + fome
    document.getElementById("humor").innerHTML = "Humor: " + humor()
    imagem();
}
// criar uma outra função para clicar e aumentar a fome e a saude, as funções que estão aqui, devem diminuir 
function dano() {
    if (saude > 0)
        saude = saude - 2
    if (fome > 0)
        fome = fome - 2
}

function humor() {
    return (fome + saude) / 2;
}

function comer(valor) {

    if (fome < 100) {
        fome = fome + valor
    }
    document.getElementById("fome").innerHTML = "Fome: " + fome
    document.getElementById("saude").innerHTML = "Saude: " + saude
}

function remedio(valor) {
    if (saude < 100){
        saude = saude + valor
    }
    document.getElementById("fome").innerHTML = "Fome: " + fome
    document.getElementById("saude").innerHTML = "Saude: " + saude
}
    
function imagem() {
    img = "t01.gif";
    if (saude == 0 || fome == 0)
        img = "t07.gif";
    else if (tempo <= 4)
        img = "t01.gif";
    else if (tempo <= 8)
        img = "t02.gif";
    else if (tempo <= 16)
        img = "t03.gif";
    else if (tempo <= 32)
        img = "t05.gif";
    else if (tempo <= 64)
        img = "t06.gif";

    document.getElementById("foto").src = "img/" + img;
}