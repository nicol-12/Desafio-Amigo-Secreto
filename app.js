// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    const inputNombre = document.getElementById("amigo");
    const btnAgregar = document.querySelector(".button-add");
    const listaAmigos = document.getElementById("listaAmigos");
    const btnSortear = document.querySelector(".button-draw");
    const resultado = document.getElementById("resultado");
    
    let amigos = [];

    btnAgregar.addEventListener("click", function () {
        agregarAmigo();
    });

    btnSortear.addEventListener("click", function () {
        sortearAmigo();
    });

    function agregarAmigo() {
        const nombre = inputNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        amigos.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    }

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Debe agregar al menos un nombre para sortear.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<li style="color: green; font-weight: bold;">El amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong></li>`;
        
    
        amigos = [];
        listaAmigos.innerHTML = "";
    }
});