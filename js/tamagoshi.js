// codigo retirado de mim mesmo pq sou inteligente.
var nome = "Brwninhouu";
var saude = 50;
var fome = 50;
var tempo = 0;

setInterval(display, 24999); //1000 = 1seg
display();

function display() {
    tempo++
    if (tempo >= 4) dano()
    document.getElementById("tempo").innerHTML = "Tempo: " + tempo
    document.getElementById("saude").innerHTML = "Saude: " + saude
    document.getElementById("fome").innerHTML = "Fome: " + fome
    document.getElementById("humor").innerHTML = "Humor: " + humor()
    imagem();
    if (img == "t07.gif") morreu()
}

function morreu() {
    document.write("<center><h1>VOCÊ PERDEU, TROUXA, VOCÊ É O PIOR PAI QUE EU JÁ VI NA MINHA VIDA</h1><br><img src='img/lucasromario.jpg'><br><br><img src='img/t07.gif' width=500 height=300></center>")
}

function dano() {
    if (saude > 0)
        saude = saude - 3
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
    if (saude < 100) {
        saude = saude + valor
    }
    document.getElementById("fome").innerHTML = "Fome: " + fome
    document.getElementById("saude").innerHTML = "Saude: " + saude
}


function imagem() {
    img = "t01.gif";
    if (saude <= 0 || fome <= 0)
        img = "t07.gif";
    else if (tempo < 4)
        img = "t01.gif";
    else if (tempo < 8)
        img = "t02.gif";
    else if (tempo == 10)
        img = "lucasromario.jpg";
    else if (tempo < 16)
        img = "t03.gif";
    else if (tempo < 32)
        img = "t05.gif";
    else if (tempo < 64)
        img = "t06.gif";

    document.getElementById("foto").src = "img/" + img;
}