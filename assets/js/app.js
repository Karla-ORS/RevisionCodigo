// Definicion de la base API de Github 
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Seleccione los elementos del DOM para mostrar los datos del usuario
const nameE1 = document.querySelector('name');
const blogE1 = document.querySelector('#blog');
const locationE1 = document.querySelector('.location');

// Se completa la funcion que muestra los datos del usuario con un async 
async function displayUser(username) {
   // Mostramos un mensaje mientras se obtienen los datos
  nameE1.textContent = 'cargando...';

  // Se realiza la petición a la API usando fetch y esperamos la respuesta
  const response = await fetch(`${usersEndpoint}/${username}`);

   // Converti la respuesta en un objeto JSON para poder trabajar con los datos
  const data = await response.json() 

    // Verificacion  en consola qué datos llegan (para depuración)
  console.log(data);

  //Se muestran los datos obtenidos en el DOM
  nameE1.textContent = data.name || "No disponible";
  blogE1.textContent = data.blog || "No disponible";
  locationE1.textContent = data.location || "No disponible";
}

// Maneja los errores para mostrar en la consola y en el DOM si sale mal
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
//Se muestra el error en pantalla 
  nameE1.textContent = `Algo salió mal: ${err.message}`;
}

// Llamo la función para mostrar los datos de un usuario de ejemplo
displayUser('stolinski').catch(handleError);