//Crear variables para los valores de la matriz
let a = document.querySelector('#x1')
let b = document.querySelector('#y1')
let t1 = document.querySelector('#t1')
let c = document.querySelector('#x2')
let d = document.querySelector('#y2')
let t2 = document.querySelector('#t2')
let determinante

//Crear variable para el boton 'Calcular'
let btn = document.querySelector('#btn')
let limpiador = document.querySelector('#limpiar')
let resultado = document.querySelector('#resultado')
let resultado2 = document.querySelector('#resultado2')


function limpiar_casilleros() {
    a.value = ""
    b.value = ""
    t1.value = ""
    c.value = ""
    d.value = ""
    t2.value = ""
    resultado.textContent = ""
    resultado2.textContent = ""
    document.getElementById('aparecer').style.display='none';
}
//Función para visualizar el botón de limpiar que está oculto 
function ver_boton_limpiar(){
    document.getElementById('aparecer').style.display='block';

}

//Crear la funcion para obtener el determinante de una matriz 2x2 
function determinante2x2(x1, y1, x2, y2) {
    //Variable para los valores que se suman hacia la derecha
    let derecha = x1 * y2
    //Variable para los valores que se restaran a los valores anteriores
    let izquierda = y1 * x2
    //Retornar la resta de ambas variables
    determinante = (derecha - izquierda)
    return determinante;
}

function cramer2x2() {
    
        //Obtener el determinante de la matriz 'A'
        let detA = determinante2x2(Number(a.value), Number(b.value), Number(c.value), Number(d.value))
        //Obtener el determinante de la matriz 'A' en la columna de las x
        let detX = determinante2x2(Number(t1.value), Number(t2.value), Number(b.value), Number(d.value))
        //Obtener el determinante de la matriz 'A' en la columna de las y
        let detY = determinante2x2(Number(a.value), Number(c.value), Number(t1.value), Number(t2.value))
        //Obtener el valor de x
        let valorX = detX / detA
        //Obtener el valor de y
        let valorY = detY / detA
        //Mostrar ambos valores
        resultado.textContent = 'El valor de x es: ' + valorX + ', y el valor de y es: ' + valorY
        resultado2.textContent = 'La determinante de la matriz es:' + determinante
        return x, y
}

//Invocar funcion cramer
btn.onclick = function() {
    cramer2x2()
    ver_boton_limpiar()
}

limpiador.onclick = function() {
    limpiar_casilleros()
}
// 1 -3, 1 5 => 8 ----- Deter
// 1 -3 2, 1 5 10 => x = 5, y = 1 ----- cramer
