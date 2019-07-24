var teclas = {
UP: 38,
DOWN: 40,
RIGHT: 39,
LEFT: 37
};
console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("areas_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150; 


dibujarlinea("red", 149,149,151,151, papel);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath(); //arrancan un dibujo
    lienzo.strokeStyle = color;
    lienzo.lineWidht = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath(); // cierran un dibujo
}

function dibujarTeclado(evento)
{
    var colorcito = "blue";
    var movimiento = 10;
switch (evento.keyCode)

{
case teclas.UP:
    dibujarlinea( colorcito, x, y, x, y - movimiento, papel);
    y = y - movimiento;
console.log("arriba")    
    break;
case teclas.DOWN:
    dibujarlinea( colorcito, x, y, x, y + movimiento, papel);
 y = y + movimiento;
    console.log("abajo");
    break;
    
case teclas.LEFT:
        dibujarlinea( colorcito, x, y, x -  movimiento, y, papel );
x = x - movimiento;
    console.log("izquierda");
    break;
case teclas.RIGHT:
        dibujarlinea( colorcito, x, y, x + movimiento, y, papel);
    x = x + movimiento;
    console.log("derecha");
    break;        

}
}


/*if(evento.keyCode == teclas.UP)
{
    console.log("vamos pa arriba")
}

if(evento.keyCode == teclas.DOWN)
{
    console.log("vamos pa abajo")
}
if(evento.keyCode == teclas.LEFT)
{
    console.log("vamos pa IZQUIERDA")
}
if(evento.keyCode == teclas.RIGHT)
{
    console.log("vamos pa derecha")
}

}*/