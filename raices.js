function raices() {
    var x = parseInt(document.getElementById("x").value);

    var e = Math.pow(Math.sin(x * Math.PI / 180) + Math.cos(x * Math.PI / 180), 2);
    var d = 1 + 2 * Math.sin(x * Math.PI / 180) * Math.cos(x * Math.PI / 180);
    var a = (1 - 2 * Math.cos(x * Math.PI / 180) - 3 * Math.pow(Math.cos(x * Math.PI / 180), 2)) / Math.pow(Math.sin(x * Math.PI / 180), 2);
    var b = (1 - 3 * Math.cos(x * Math.PI / 180)) / (1 - Math.cos(x * Math.PI / 180));
    var f = a.toFixed(4);
    var g = b.toFixed(4);
    if (d == e && f == g) {
        document.getElementById('raiz').innerHTML = "la identidad se comprueba" + " repuesta @" + "la identidad se comprueba" + " repuesta b"
    } else if (d == e || f == g) {
        if (d == e) {
            document.getElementById('raiz').innerHTML = g + "la identidad se comprueba" + f + " repuesta @" + "la identidad  no se comprueba" + " repuesta b"
        }
    } else {
        document.getElementById('raiz').innerHTML = "la identidad no se comprueba" + " repuesta @" + "la identidad   se comprueba" + " repuesta b"
    }
}