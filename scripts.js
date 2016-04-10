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

function printList(list, posicion){ //recibe el objeto y la posicion
	var listHTML = '';
	if (posicion < 0) { //si posicion es menor que cero entonces imoprime la lista completa
		for(var i=0; i<list.length; i++){
			listHTML += creaList(list, i);
		}
	}else{//si posicion tiene un valor mayor o igual que cero imprime solo la informacion que se ubica en la posicion enviada
		listHTML += creaList(list, posicion);
	}
	printHTML(listHTML, "info-estudiantes");//envia el codigo html a imprimir, ademas se asigna el TAG en el que se va a imprimir
}


/******************************************
Funcion que crea las listas
********************************************/

function creaList(list, posicion){//crea la lista de datos de la posicion solicitada
	var listHTML = '';
	
		listHTML += '<ul>';
		listHTML += '<li>Nombre: ' + list[posicion].nombre + '</li>'; //nos entrega el dato del atributo segun la posicion que tenga en el objeto
		listHTML += '<li>Genero: ' + list[posicion].genero + '</li>';
		listHTML += '<li>Edad: ' + list[posicion].edad + '</li>';
		//caso especial aqui ya que recorremos dos posiciones, la primer del arreglo del objeto y luego la del arreglo del atributo del objero
		listHTML += '<li>Notas: ' + list[posicion].arrogloNotas[0] + ' - ' + list[posicion].arrogloNotas[1] + ' - ' + list[posicion].arrogloNotas[2] + '</li>';
		listHTML += '<li>Ciudad: ' + list[posicion].ciudad + '</li>';
		listHTML += '<li>Lenguaje Favorito: ' + list[posicion].lenguajeFavorito + '</li>';
		if(list[posicion].estaTrabajando){//si es true por defecto trabaja
			listHTML += '<li>Esta Trabajando: Si camella </li>';
		}else{//si es false por defecto se agrega un comentario para queria un poco
			listHTML += '<li>Esta Trabajando: un desempleado mas de la patria </li>';
		}
	listHTML += '</ul> <br>' ;// al final del HTML se agraga un espacio en blaco que diferencia a cada estudiante
	return listHTML; //retorna la lista listo para presentada
}



/******************************************
Funcion que imprime en el tag que queramos
********************************************/
function printHTML(mensaje, tag){
	var outputDiv = document.getElementById(tag);// aqui en el parametro TAG indica el id del tag en el que se va a presentar
	outputDiv.innerHTML = mensaje;
}


/********************************************
funcion de busqueda de persona
*******************************************/
function buscarPersona(list, nombre){
	var existe = '-1';// se define por defecto ya que las posiciones de un array comienzan en cero
	for(var i=0; i<list.length; i++){
		if(list[i].nombre.toLowerCase() == nombre){//compara los nombres con el dato ingresado, en caso de coincidir se asigna la posicion el la variable existe
			existe = i;
		}
	}
	return existe; //retorna la poscion encontrada o la de defecto
}

/*********************************************
Funciones ingresadas por teclado
de lista, salir o seleccion
*********************************************/
while(true){
	var nombreEstudiante = prompt("Ingrese el Nombre de un Estudiante, S para salir o L para listar y salir");
	if(nombreEstudiante != '' && nombreEstudiante !=null){//filtro para no recibir valores nullos
		if(nombreEstudiante.toLowerCase() =='s'){ // si digita s el programa termina
			alert("Programa terminado");
			printHTML('', "info-estudiantes");//borramos la pantalla antes de salir
			break;
		}
		else if(nombreEstudiante.toLowerCase() =='l'){// si digita l se muestra la lista de estudiantes y el programa termina
			printList(persona, -1); // posicion menos 1 es para imprimir la lista completa
			break;
		}else{
			//lla ma a la funcion de buscar la poscion en la que se encuentra la persona dontro del arreglo del objeto
			var posicion = buscarPersona(persona, nombreEstudiante.toLowerCase());
			if(posicion >=0){
				printList(persona, posicion); //llama a la funcion de imprimir la lista se una sola persona
				}else{
					alert('La persona/estudiante no existe');
				}
			}
		}else{
			alert('Hay un error en el dato ingresado');//valor nulo ingresado
			//throw new Error("valor nulo ingresado");
		}
	}