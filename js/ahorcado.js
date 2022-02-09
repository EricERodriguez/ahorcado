// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed!";
//   }
let palabra = "agua"



function myFunction() {
    for (let index = 0; index < palabra.length; index++) {
        const element = palabra[index];
        console.log(element);

        const node = document.createElement(`p`);
        node.className=`${element}-${index}`
        // node.value=`${element}`
        
        // Create a text node:
        const textnode = document.createTextNode(``);
        
        // Append the text node to the "li" node:
        node.appendChild(textnode);
        
        // Append the "li" node to the list:
        document.getElementById("myList").appendChild(node);
    }
}
function letraATomar() {
    var letra = ""
    letra = document.getElementById("domTextElement").value
    console.log(letra);
    return letra
}
// var letra = ""
function coicidencia() {
    letraATomar();
    arrayLetras = document.getElementsByTagName('p')
    letra = document.getElementById("domTextElement").value
    // console.log(letra);
    let conteo = 0
    for (let index = 0; index < arrayLetras.length; index++) {
        // const element = array[index];
        console.log(arrayLetras[index].classList[0]);
        console.log(typeof(arrayLetras[index].classList[0]));
        console.log(arrayLetras[index].value);
        if (arrayLetras[index].classList[0] == `${this.letra}-${index}`) {
            console.log("hay coincidencia");
            // arrayLetras[index].value = this.letra
            const data = document.querySelector(`.${this.letra}-${index}`);
            data.innerHTML = `<h1>${this.letra}</h1>`;
        }else if (arrayLetras[index].classList[0] != `${this.letra}-${index}`){
            conteo++
            console.log(conteo);
            const label = document.createElement(`label`);
            const textlabel = document.createTextNode(`${this.letra}`);
            // label.value=`${this.letra}`
            // Append the text label to the "li" label:
            label.appendChild(textlabel);
            // Append the "li" label to the list:
            document.getElementById("labelId").appendChild(label);
        }
    }
}