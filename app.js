// CHAMADAS HTTP

const BASE_URL = "https://parallelum.com.br/fipe/api/v1/carros"
function getModelos(idMarca) {
  
  //Criar uma função que faça uma request
    // Requisição
    // Trazer a listagem de modelos
    // Retornar os modelos
  // Apresentar no select de modelos
    //   iterar sob cada modelo 
    //      adicionar a opção no select 

  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var resposta = JSON.parse(xhttp.responseText); 
        mountSelectModelos(resposta.modelos)
      }
  };

  xhttp.open("GET", `${BASE_URL}/marcas/${idMarca}/modelos`, true);
  xhttp.send();
}
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




/////////////////////////////////////////////////

// MONTAGEM DE INPUTS


function mountSelectModelos(modelos) {
  console.log(modelos)

  // for(var i = 0; i < modelos.length; i++) {
  //   const modelo = modelos[i]

  // }


  modelos.forEach((modelo) => {
    addOption("modelos", modelo.nome, modelo.codigo)
  })
}




function mountSelectMarcas(marcas) {
  console.log("mountSelectMarcas")
  // for (let i = 0; i < marcas.length; i++) {
  //   const marca = marcas[i];
  // }
  marcas.forEach(marca => {
    // Adicionar uma opção
    addOption("MINHASMARCAS", marca.nome, marca.codigo)
  });
}

/////////////////////////////////////////////////


// EXECUÇÃO PRINCIPAL
// Quando minha página for carregada
console.warn("ANTES DE CHAMAR getMarcas")
getMarcas();

/////////////////////////////////////////////////
