const container = document.getElementById("contenedor");

async function getApi() {
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => createComment(data));
}

function createComment(data) {
  let name = data.results[0].name.first;
  let surname = data.results[0].name.last;
  let country = data.results[0].location.country;
  let city = data.results[0].location.city;
  let picture = data.results[0].picture.large;

  let countrycode = countryList.find((pais) => {
    return pais.name === country;
  });
  
  countrycode = countrycode.code;

  const crearTabla = document.createElement("div");
  crearTabla.id = "container";
  crearTabla.innerHTML = `
  <div id="presentation">
  <p>${name} ${surname}</p>
  </div>
  <div id="image"><img src= ${picture}></div>
  <div id="mensaje"> 
  <p>From ${city}, ${country}</p>
  <img src= https://www.countryflagicons.com/FLAT/64/${countrycode}.png>
  </div>`;
  container.append(crearTabla);
}

getApi();


document.getElementById('boton').addEventListener('click', getApi)