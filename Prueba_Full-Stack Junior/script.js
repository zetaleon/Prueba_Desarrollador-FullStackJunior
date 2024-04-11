function filtrarDatos() {
    var filtro = document.getElementById("filtro").value;
    var valorFiltro = document.getElementById("valorFiltro").value.toUpperCase();
    var tabla = document.getElementById("tablaDatos");
    var filas = tabla.getElementsByTagName("tr");
  
    if (valorFiltro === "") {
      document.getElementById("campoObligatorio").style.display = "inline";
      return;
    } else {
      document.getElementById("campoObligatorio").style.display = "none";
    }
  
    for (var i = 1; i < filas.length; i++) {
      var celda = filas[i].getElementsByTagName("td")[getIndex(filtro)];
      var textoCelda = celda.textContent || celda.innerText;
  
      if (textoCelda.toUpperCase().indexOf(valorFiltro) > -1) {
        filas[i].style.display = "";
      } else {
        filas[i].style.display = "none";
      }
    }
  }
  
  function limpiarFiltros() {
    document.getElementById("valorFiltro").value = "";
    var tabla = document.getElementById("tablaDatos");
    var filas = tabla.getElementsByTagName("tr");
    for (var i = 1; i < filas.length; i++) {
      filas[i].style.display = "";
    }
  }
  
  function getIndex(columna) {
    switch (columna) {
      case 'nombre':
        return 0;
      case 'cedula':
        return 1;
      // Agregar más casos según las columnas de la tabla
      default:
        return 0;
    }
  }