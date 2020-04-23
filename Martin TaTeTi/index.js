var iniciojuego = false;
var turno = 0;

function iniciarJuego() {
    iniciojuego = true;
    var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");
    if (jugador1.value == "") {
        alert("No existe el jugador 1");
        return
    } else {
        if (jugador2.value == "") {
            alert("No existe el jugador 2")
            return
        }
    }
    document.getElementById("textoTabla").innerHTML = ("Tabla de juego:  Turno de " + jugador1.value);
    turno = 1;
}

function cambiarCasilla(id) {
    if (iniciojuego == true) {
        if (turno == 1 && document.images.namedItem(id).alt != "cruz" && document.images.namedItem(id).alt != "circulo") {
            document.images.namedItem(id).src = "/cruz.png";
            document.images.namedItem(id).alt = "cruz";
            turno = 0;
            document.getElementById("textoTabla").innerHTML = ("Tabla de juego: Turno de " + jugador2.value);
        } else {
            if (turno == 0 && document.images.namedItem(id).alt != "cruz" && document.images.namedItem(id).alt != "circulo") {
                document.images.namedItem(id).src = "/circulo.png";
                document.images.namedItem(id).alt = "circulo";
                turno = 1;
                document.getElementById("textoTabla").innerHTML = ("Tabla de juego: Turno de " + jugador1.value);
            }
        }
        if (turno == 0) { comprobarjuego(jugador1.value); } else { comprobarjuego(jugador2.value); }
    }
}

function comprobarjuego(j) {
    x11 = document.images.namedItem("img1,1").alt;
    x12 = document.images.namedItem("img1,2").alt;
    x13 = document.images.namedItem("img1,3").alt;
    x21 = document.images.namedItem("img2,1").alt;
    x22 = document.images.namedItem("img2,2").alt;
    x23 = document.images.namedItem("img2,3").alt;
    x31 = document.images.namedItem("img3,1").alt;
    x32 = document.images.namedItem("img3,2").alt;
    x33 = document.images.namedItem("img3,3").alt;

    if (x11 == x12 && x11 == x13 && x11 != "" || x11 == x21 && x11 == x31 && x11 != "" || x11 == x22 && x11 == x33 && x11 != "" ||
        x21 == x22 && x21 == x23 && x21 != "" || x31 == x32 && x31 == x33 && x31 != "" || x13 == x22 && x13 == x31 && x13 != "" ||
        x12 == x22 && x12 == x32 && x12 != "" || x13 == x23 && x13 == x33 && x13 != "") {
        document.getElementById("textoTabla").innerHTML = ("Ganaste " + j + "!!");
        iniciojuego = false;
        window.HTMLBodyElement
    } else {
        if (x11 != "" && x12 != "" && x13 != "" && x21 != "" && x22 != "" && x23 != "" && x31 != "" && x32 != "" && x33 != "") {
            document.getElementById("textoTabla").innerHTML = ("Empate!! Click en Iniciar Juego para volver a comenzar");
            iniciojuego = false;
            reinicio();
        }
    }
}

function reinicio() {
    document.images.namedItem("img1,1").alt = document.images.namedItem("img1,2").alt = document.images.namedItem("img1,3").alt = document.images.namedItem("img2,1").alt = document.images.namedItem("img2,2").alt = document.images.namedItem("img2,3").alt = document.images.namedItem("img3,1").alt = document.images.namedItem("img3,2").alt = document.images.namedItem("img3,3").alt = "";
    document.images.namedItem("img1,1").src = "";
    document.images.namedItem("img1,2").src = "";
    document.images.namedItem("img1,3").src = "";
    document.images.namedItem("img2,1").src = "";
    document.images.namedItem("img2,2").src = "";
    document.images.namedItem("img2,3").src = "";
    document.images.namedItem("img3,1").src = "";
    document.images.namedItem("img3,2").src = "";
    document.images.namedItem("img3,3").src = "";
}

function resetGame() {
    location.reload();
}