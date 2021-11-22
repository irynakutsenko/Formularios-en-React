import {useState} from 'react';
import './App.css';


function App() {
	//Creamos 2 variables nombre y apellido
	let [nombre,setNombre] = useState("")
	let [apellido,setApellido] = useState("")

	//Como trabajar con arrays dentro de useState
	let [array, setArray] = useState(["Lorem ", "ipsum ", "dolor ", "sit "])
	
	function cambiarNombre(event){
		setNombre(event.target.value)
	}

	function cambiarApellido(event){
		setApellido(event.target.value)
	}
//Para añadir al array un valor 
	function anadirAlArray(){
		//Para ampliar un array (para fucionar 2 arrays, un nuevo mas viejo)
		// [] + array - es la sintaxis de abajocon los 3... ypara sumar otro mas [...array, ...arrayNuevo]
		//Este es equivalente => let nuevoarray = [...array, "amet."];
		let nuevoarray = [...array];
		//Si qusiriamos eliminar un array teniamos que dentro a este nuevoarray un splice, en cambio de push, encontramos la posicion en cual queriamos eliminar. Hacemos un splice de esa posicion -1. Y luego seteamos este nuevoarray.  
		nuevoarray.push("amet.")
		setArray(nuevoarray)
	}

//Como trabajar con los formularios, si queremos un Change,lo metemos un Change
	return (
		<>
		{
			//Un mapeo dentro de un return
			array.map(function(arrayElement) {
				return(<span>{arrayElement}</span>)
			})
			//Un botton para modificar elementos de este array, para sumarles o modificarles
		}
		<button onClick={anadirAlArray}>Añadir elemento al array</button>
		{/* {nombre} */}
		<div>
			<input type="text" value={nombre} onChange={cambiarNombre}/>
			<input type="text" value={apellido} onChange={cambiarApellido}/>
			<button onClick={()=>{
			//En este un Click se elimia en input sus valores
			setNombre("");
			setApellido("");
			alert(nombre + " " + apellido);
			//Un alert tiene mas importancia, por eso primero recorre un alert u luego otro, por eso ponemos al final, porque useState tarda unos 0.2 segundos y alert es instala 
			}}>click</button>
			</div>
		</>
	);
}
  

export default App;
