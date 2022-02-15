let aleatorio = parseInt((Math.random() * 5001), 10)

let palabra = ""



function jugar() {
    let palabra_aleatoria = palabras_comunes[aleatorio]
    palabra = palabra_aleatoria

    let htmlJugar = document.getElementById('jugar')
    htmlJugar.setAttribute("disabled", true)

    let htmlCoincidencia = document.getElementById('coincidencia')
    htmlCoincidencia.removeAttribute('disabled')

    for (let index = 0; index < palabra.length; index++) {
        const element = palabra[index];
        console.log(element);

        const node = document.createElement(`p`);
        node.className=`${element}-${index}`
        node.setAttribute('id','line')
        const textnode = document.createTextNode(` _ `);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
    }
}

function letraATomar() {
    var letra = ""
    letra = document.getElementById("domTextElement").value
    console.log(letra);
    return letra
}
let conteosPerdidos = 0
let conteosGanadas = 0

function coincidenciaEnpalabra() {
    letra = document.getElementById("domTextElement").value
    console.log(palabra.lastIndexOf(letra));
    if (palabra.lastIndexOf(letra)=== -1) {
        conteosPerdidos++
        {conteosPerdidos === 6 ? alert('Perdiste'): ''}

        intro = document.querySelector(`div.corps-${conteosPerdidos}`);
        console.log(intro);
        intro.style.visibility = "visible"

        const label = document.createElement(`label`);
            const textlabel = document.createTextNode(`${letra}`);
            label.appendChild(textlabel);
            document.getElementById("labelId").appendChild(label);
    }else{
        arrayLetras = document.getElementsByTagName('p')
        for (let index = 0; index < arrayLetras.length; index++) {
            if (arrayLetras[index].classList[0] == `${this.letra}-${index}`) {
                conteosGanadas++
                console.log(conteosGanadas);
                console.log("hay coincidencia");
                const data = document.querySelector(`.${letra}-${index}`);
                data.innerHTML = `${letra}`;
                {conteosGanadas === palabra.length ? alert('Ganaste, felicidades'): ''}
            }
        }
    }
    document.getElementById("domTextElement").value = ''
}