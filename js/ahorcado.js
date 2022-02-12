let palabra = "agua"



function jugar() {
    let htmlJugar = document.getElementById('jugar')
    htmlJugar.setAttribute("disabled", true)
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
                {conteosGanadas === palabra.length ? alert('ganaste'): ''}
            }
        }
    }
    document.getElementById("domTextElement").value = ''
}
// var letra = ""
// function coicidencia() {
//     letraATomar();
//     arrayLetras = document.getElementsByTagName('p')
//     letra = document.getElementById("domTextElement").value
//     // console.log(letra);
//     let conteo = 0
//     for (let index = 0; index < arrayLetras.length; index++) {
//         // const element = array[index];
//         console.log(arrayLetras[index].classList[0]);
//         console.log(typeof(arrayLetras[index].classList[0]));
//         console.log(arrayLetras[index].value);
//         console.log(palabra.lastIndexOf('z'));
//         if (arrayLetras[index].classList[0] == `${this.letra}-${index}`) {
//             console.log("hay coincidencia");
//             // arrayLetras[index].value = this.letra
//             const data = document.querySelector(`.${this.letra}-${index}`);
//             data.innerHTML = `<h1>${this.letra}</h1>`;
//         }else if (arrayLetras[index].classList[0] != `${this.letra}-${index}`){
//             conteo++
//             console.log(conteo);
//             const label = document.createElement(`label`);
//             const textlabel = document.createTextNode(`${this.letra}`);
//             // label.value=`${this.letra}`
//             // Append the text label to the "li" label:
//             label.appendChild(textlabel);
//             // Append the "li" label to the list:
//             document.getElementById("labelId").appendChild(label);
//         }
//     }
// }