// array bidimencional
var mapa=[
"******************",
"*_________*______*",
"*_*****_____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

// crea una nueva matriz con posicion del elemento (0,1) .........etc.
var nuevaMatriz = new Array(mapa.length);
for (var i = 0; i < nuevaMatriz.length; i++){
	nuevaMatriz[i] = new Array(mapa[0].length);
}
// variable global
var nuevaPosicion; 

//los 'id' de los botones
var izq = document.getElementById('izq');
var der = document.getElementById('der');
var adelante = document.getElementById('adelante');
var salida = document.getElementById('salida');

//creando una nueva tabla
var tabla = document.createElement('table');
    for (var i = 0; i < mapa.length; i++) {
        var columnas = document.createElement('tr');//las columnas
        console.log(columnas);
        for (var j = 0; j < mapa[i].length; j++) {
            var fila = document.createElement('td');//las filas
            //console.log(fila);
            if (mapa[i][j]== '*') {
                fila.setAttribute('class', 'negro');
            }else if (mapa[i][j] == '_'){
            	fila.setAttribute('class', 'blanco');
            }else if (mapa[i][j]== 'o'){
            	fila.setAttribute('class', 'rojo');
            	//creando imagen
				var imagen = document.createElement('img');
            	imagen.src ='css/arriba.png';
            	// en las filas que son los "td" implementando una imagen hija
            	fila.appendChild(imagen);
            	//objeto o constante literal
            	nuevaPosicion = {x:i,y:j, direccion:'arriba'};

            }else if(mapa[i][j]== 'W'){
            	fila.setAttribute('class', 'azul');
            }
            columnas.appendChild(fila);
            
            nuevaMatriz[i][j] = fila;// en el nuevo array en las distintas posciociones estan los "td"
        }
        tabla.appendChild(columnas);
    }
    tablero.appendChild(tabla);


der.onclick = function(){//gira al lado derecho

	if(nuevaPosicion.direccion == "arriba"){
	var imagen = document.createElement("img");
		imagen.src = "css/derecha.png";
		nuevaPosicion.direccion = "derecha";
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
	}
	else if(nuevaPosicion.direccion == "derecha"){
	var imagen = document.createElement("img");
		imagen.src = "css/abajo.png";
		nuevaPosicion.direccion = "abajo";
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
	}
	else if(nuevaPosicion.direccion == "izquierda"){
	var imagen = document.createElement("img");
		imagen.src = "css/arriba.png";
		nuevaPosicion.direccion = "arriba";
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
	}
	else if(nuevaPosicion.direccion == "abajo"){
	var imagen = document.createElement("img");
		imagen.src = "css/izquierda.png";
		nuevaPosicion.direccion = "izquierda";
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
	}

}
izq.onclick = function(){// gira al lado izquierdo
	if(nuevaPosicion.direccion == "arriba"){
	var imagen = document.createElement("img");
		imagen.src = "css/izquierda.png";
		nuevaPosicion.direccion = "izquierda";
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
	}
	else if(nuevaPosicion.direccion == "derecha"){
	var imagen = document.createElement("img");
		imagen.src = "css/arriba.png";
		nuevaPosicion.direccion = "arriba";
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
	}
	else if(nuevaPosicion.direccion == "izquierda"){
	var imagen = document.createElement("img");
		imagen.src = "css/arriba.png";
		nuevaPosicion.direccion = "arriba";
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
	}
	else if(nuevaPosicion.direccion == "abajo"){
	var imagen = document.createElement("img");
		imagen.src = "css/derecha.png";
		nuevaPosicion.direccion = "derecha";
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
		nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
	}
}
//avanza una posciocion mas o disminuyen de acuerdo a la condicion
adelante.onclick = function(){
	if (nuevaPosicion.direccion == "arriba") {
		if (mapa[nuevaPosicion.x-1][nuevaPosicion.y] == "_") {
		var imagen = document.createElement('img');
    	imagen.src ='css/arriba.png';
    	nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
    	nuevaPosicion.x = nuevaPosicion.x-1;
    	nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
		}
	}	
	else if (nuevaPosicion.direccion == "derecha") {
		if (mapa[nuevaPosicion.x][nuevaPosicion.y+1] == "_") {
		var imagen = document.createElement('img');
    	imagen.src ='css/derecha.png';
    	nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
    	nuevaPosicion.y = nuevaPosicion.y+1;
    	nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
		}
	}
	else if (nuevaPosicion.direccion == "izquierda") {
		if (mapa[nuevaPosicion.x][nuevaPosicion.y-1] == "_") {
		var imagen = document.createElement('img');
    	imagen.src ='css/izquierda.png';
    	nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
    	nuevaPosicion.y = nuevaPosicion.y-1;
    	nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
		}
	}
	if (nuevaPosicion.direccion == "abajo") {
		if (mapa[nuevaPosicion.x+1][nuevaPosicion.y] == "_") {
		var imagen = document.createElement('img');
    	imagen.src ='css/abajo.png';
    	nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].removeChild(nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].firstChild);
    	nuevaPosicion.x = nuevaPosicion.x+1;
    	nuevaMatriz[nuevaPosicion.x][nuevaPosicion.y].appendChild(imagen);
		}
	}
}

salida.onclick = function(){
	
}

// var table = document.createElement('table');
//     table.border = '1';
//     for (var i = 0; i < mapa.length; i++) {
//         var columnas = document.createElement('tr');
//         console.log(columnas);//contiene toda las columnas
//         var separador = mapa[i].split("");
//         for (var j = 0; j < separador.length; j++) {
//             var filas = document.createElement('td');//contiene toda las filas.
//             var contenido = document.createTextNode(separador[j]);
//            //condiciones para luego darle el color en css.
//             if(separador[j] == "*"){
//             filas.setAttribute('class', 'negro');
//             }else if(separador[j] == "_"){
//             columnas.setAttribute('class', 'blanco');
//             }else if (separador[j]== "o"){
//             filas.setAttribute('class', 'rojo');
//            	}else if(separador[j]== "W"){
//             filas.setAttribute('class', 'azul');
//             }
//             filas.appendChild(contenido);

//             columnas.appendChild(filas);
//         }
//         table.appendChild(columnas);
//     }
//     tablero.appendChild(table);




