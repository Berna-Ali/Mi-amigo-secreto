let listaDeAmigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    if (nombre === "") {
        alert("No olvides añadir nombres para jugar.");
        return;
    }
    if (listaDeAmigos.indexOf(nombre) === -1) {
        listaDeAmigos.push(nombre);
        mostrarListaAmigos();
        input.value = "";
    } else {
        alert("Este amigo ya fue agregado, intenta otra vez.");
    }
}

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaDeAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length < 4) {
        alert("Agrega al menos cuatro amigos, para el sorteo.");
        return;
    }
    let indice = Math.floor(Math.random() * listaDeAmigos.length);
    let elegido = listaDeAmigos[indice];
    document.getElementById('resultado').innerHTML = "<li>Tu Amigo secreto es: " + elegido + "</li> Felicidades";
}

function limpiarLista() {
    listaDeAmigos = [];
    mostrarListaAmigos();
    document.getElementById('resultado').innerHTML = "";
}