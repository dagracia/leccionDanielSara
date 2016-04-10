/**********************************
OBJETO PERSONA
registra la informacion de los estudiantes
****************************************/


var persona = [
{nombre:"Daniel",genero:"Masculino", edad:29, arrogloNotas:[10,10,10], ciudad:"La Libertad", lenguajeFavorito:"java", estaTrabajando:true},//primer registro
{nombre:"Sara",genero:"Femenino", edad:29, arrogloNotas:[11,11,11], ciudad:"Santa Elena", lenguajeFavorito:"ninguno", estaTrabajando:true},//segundo registro
{nombre:"Andrea",genero:"Femenino",	edad:28, arrogloNotas:[12,12,12], ciudad:"Anconcito", lenguajeFavorito:"C#", estaTrabajando:false},//tercer registro
{nombre:"Shirley",genero:"Femenino", edad:30, arrogloNotas:[13,13,13], ciudad:"La Libertad", lenguajeFavorito:".net", estaTrabajando:true},//cuarto registro
{nombre:"Erika",genero:"Femenino",	edad:31, arrogloNotas:[14,14,14], ciudad:"Salinas",	lenguajeFavorito:"html", estaTrabajando:false}//quinto registro
];


/****************************************************
Impresion por pantalla de lista u objeto seleccionado
*****************************************************/

function printList(list, posicion){
	var listHTML = '';
	if (posicion < 0) {
		for(var i=0; i<list.length; i++){
			listHTML += creaList(list, i);
		}
	}else{
		listHTML += creaList(list, posicion);
	}

	printHTML(listHTML, "info-estudiantes");
}


/******************************************
Funcion que crea las listas
********************************************/

function creaList(list, posicion){
	var listHTML = '';
	
		listHTML += '<ul style = "list-style: none;">';
		listHTML += '<li>Nombre: ' + list[posicion].nombre + '</li>';
		listHTML += '<li>Genero: ' + list[posicion].genero + '</li>';
		listHTML += '<li>Edad: ' + list[posicion].edad + '</li>';
		listHTML += '<li>Notas: ' + list[posicion].arrogloNotas[0] + ' - ' + list[posicion].arrogloNotas[1] + ' - ' + list[posicion].arrogloNotas[2] + '</li>';
		listHTML += '<li>Ciudad: ' + list[posicion].ciudad + '</li>';
		listHTML += '<li>Lenguaje Favorito: ' + list[posicion].lenguajeFavorito + '</li>';
		if(list[posicion].estaTrabajando){
			listHTML += '<li>Esta Trabajando: Si camella </li>';
		}else{
			listHTML += '<li>Esta Trabajando: un desempleado mas de la patria </li>';
		}
	listHTML += '</ul> <br><br>' ;
	return listHTML;
}



/******************************************
Funcion que imprime en el tag que queramos
********************************************/
function printHTML(mensaje, tag){
	var outputDiv = document.getElementById(tag);
	outputDiv.innerHTML = mensaje;
}


/********************************************
funcion de busqueda de persona
*******************************************/
function buscarPersona(list, nombre){
	var existe = '-1';
	for(var i=0; i<list.length; i++){
		if(list[i].nombre.toLowerCase() == nombre){
			existe = i;
		}
	}
	return existe;
}

/*********************************************
Funciones ingresadas por teclado
de lista, salir o seleccion
*********************************************/
while(true){
	var nombreEstudiante = prompt("ingrese el Nombre Estudiante");
	if(nombreEstudiante.toLowerCase() =='s'){
		alert("programa terminado");
		break;
	}
	else if(nombreEstudiante.toLowerCase() =='l'){
		printList(persona, -1); // posicion menos 1 es para imprimir la lista completa
		break;
	}else{
		var posicion = buscarPersona(persona, nombreEstudiante.toLowerCase());
		if(posicion >=0){
			printList(persona, posicion);
			}else{
				alert('la persona no existe');
			}
 
		}
	}