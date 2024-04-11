const campoSelect = document.getElementById('campo');
const valorInput = document.getElementById('valor');
const NewConsult = document.getElementById('NuevaConsulta');
const contenedorPrincipal = document.getElementById('contenedor');
const obligatorioTextoElement = document.querySelector('.obligatorio-texto');
let valFind = [];
let  Users = [
  {
    "name": "zahira",
    "id": 123456789,
    "kindId": "Cedula de ciudadania",
    "age": 30
  },
  {
    "name": "Carlos",
    "id": 987654321,
    "kindId": "Cedula de ciudadania",
    "age": 28
  },
  {
    "name": "María",
    "id": 234567890,
    "kindId": "Tarjeta de identidad",
    "age": 15
  },
  {
    "name": "Juan",
    "id": 345678901,
    "kindId": "Cedula de ciudadania",
    "age": 42
  },
  {
    "name": "Luisa",
    "id": 456789012,
    "kindId": "Cedula de extranjeria",
    "age": 37
  },
  {
    "name": "Andrés",
    "id": 567890123,
    "kindId": "Cedula de ciudadania",
    "age": 22
  },
  {
    "name": "Carolina",
    "id": 678901234,
    "kindId": "Pasaporte",
    "age": 29
  },
  {
    "name": "Alejandro",
    "id": 789012345,
    "kindId": "Cedula de ciudadania",
    "age": 33
  },
  {
    "name": "Sofía",
    "id": 890123456,
    "kindId": "Tarjeta de identidad",
    "age": 17
  },
  {
    "name": "Roberto",
    "id": 901234567,
    "kindId": "Cedula de ciudadania",
    "age": 45
  },
  {
    "name": "Daniela",
    "id": 1023456789,
    "kindId": "Cedula de extranjeria",
    "age": 25
  }
];


// Función para mostrar el texto complementario
function mostrarObligatorioTexto() {
    if (campoSelect.value === 'cedula') {
        obligatorioTextoElement.style.display = 'block';
    } else {
        obligatorioTextoElement.style.display = 'none';
    }
}



// Agregar evento al cambio del menú desplegable
campoSelect.addEventListener('change', mostrarObligatorioTexto);

// Agregar evento al botón "Buscar"
document.querySelector('input[type="submit"]').addEventListener('click', (e) => {
  contenedorPrincipal.innerHTML = '';
    e.preventDefault();
    

    if (campoSelect.value === "nombre"){
        if (valorInput.value === '') {
          obligatorioTextoElement.style.display = 'block';
      } else {
          // Aquí se debe agregar el código para realizar la consulta
          alert('Formulario enviado correctamente');
          valFind = filterByName(valorInput.value, Users)
          console.log(valFind);
      }
    } else {
      let varForm = parseInt(valorInput.value)
      valFind = filterById(varForm, Users)
    }

    valFind.forEach(usuario => {
      // Crea un nuevo div para cada usuario
      const contenedorUsuario = document.createElement('div');
      contenedorUsuario.classList.add('usuario'); // Añade una clase para estilizar si es necesario

      // Añade la información del usuario al contenedor
      contenedorUsuario.innerHTML = `
          <p class="datos-usuario">Nombre: ${usuario.name}</p>
          <p class="datos-usuario">Tipo de Documento: ${usuario.kindId}</p>
          <p class="datos-usuario">ID: ${usuario.id}</p>
          <p class="datos-usuario">Edad: ${usuario.age}</p>
      `;

      // Añade el contenedor del usuario al contenedor principal
      contenedorPrincipal.appendChild(contenedorUsuario);
  });

  console.log (valFind);

    
});

// Agregar evento al botón "Nueva consulta"
document.querySelector('input[type="reset"]').addEventListener('click', () => {
    campoSelect.value = 'nombre';
    valorInput.value = '';
    obligatorioTextoElement.style.display = 'none';
})


function filterByName (e, Users){
  let filter = [];
  Users.filter(usuario => usuario.name == e).forEach(usuario => {
  filter.push(usuario);
})
  return filter;
}

function filterById (e, Users){
  let filter = [];
  Users.filter(usuario => usuario.id == e).forEach(usuario => {
  filter.push(usuario);
})
  return filter;
}


document.addEventListener('DOMContentLoaded', function() {
  

  console.log("llego aca");

  
});




