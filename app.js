// CHAMADAS HTTP

const BASE_URL = "https://parallelum.com.br/fipe/api/v1/carros"
function getMarcas() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var marcas = JSON.parse(xhttp.responseText)
          // Quando os dados retornarem da FIPE, eu peço para montar o select
          mountSelectMarcas(marcas)
      }
  };
  xhttp.open("GET", `${BASE_URL}/marcas`, true);
  xhttp.send();
}


function getModelos(marcaID){ 
  console.log("Pegue os modelos!!!", marcaID)
}

/////////////////////////////////////////////////

// MONTAGEM DE INPUTS

function mountSelectMarcas(marcas) {
  // for (let i = 0; i < marcas.length; i++) {
  //   const marca = marcas[i];
  // }

  marcas.forEach(marca => {
    // Adicionar uma opção
    addOption("marcas", {text: marca.nome, value: marca.codigo})
  });
}

/////////////////////////////////////////////////


// EXECUÇÃO PRINCIPAL
// Quando minha página for carregada

getMarcas();
/////////////////////////////////////////////////
