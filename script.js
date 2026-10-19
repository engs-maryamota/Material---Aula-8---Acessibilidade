let tamanhoFonte = 100;
let tamanhoMain = 800;
const main = document.querySelector("main");
const FONTE_MAXIMA = 150;
const FONTE_MINIMA = 80;

function aumentarFonte() {
    if (tamanhoFonte < FONTE_MAXIMA) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
        tamanhoMain += 50;
        if (main) {
            main.style.maxWidth = tamanhoMain + "px";
        }
    }
}

function diminuirFonte() {
    if (tamanhoFonte > FONTE_MINIMA) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
        if (tamanhoMain > 800) {
            tamanhoMain -= 50;
            if (main) {
                main.style.maxWidth = tamanhoMain + "px";
            }
        }
    }
}

function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
}