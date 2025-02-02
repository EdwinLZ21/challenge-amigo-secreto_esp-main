//declaramos un array vacío para guardar los nombres de los amigos
let amigos = [];

// función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// función para actualizar la lista de amigos
function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}
