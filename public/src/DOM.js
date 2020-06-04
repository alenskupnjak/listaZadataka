const listaSvihZadataka = document.getElementById('listaZadataka');

// osvježavanje stranice Index.html
function renderDOM(listaZadataka, filteri) {
  console.log(listaZadataka, filteri);

  if (listaZadataka.length === 0) {
    listaSvihZadataka.innerHTML = '';
  } else {
    let innerHTML = '';

    if (filteri.izvrseniZadaci === true) {
      listaZadataka = listaZadataka.filter((data) => {
        return data.izvrsenZadatak === true;
      });
    }

    filterSelect(listaZadataka, filteri.select)
    console.log(listaZadataka);

    listaZadataka.forEach((element) => {
      innerHTML += `
      <div class="zadatak" id="${element.id}">
      <a href="edit.html#${element.id}" class="link">
        <p id="zadatak-naziv">${element.naziv}</p>
        <textarea id="zadatak-text" cols="50" rows="5" disabled>${
          element.text
        }</textarea>
      </a>
      <label for="zadatakIzvrsen">${moment(element.kreirano).format(
        'MM/DD/YYYY'
      )}</label >
      <input type="checkbox" id="zadatakIzvrsen" ${
        element.izvrsenZadatak === true ? 'checked' : ''
      }>
      <img src="img/delete.png" alt="" class="btn brisi">
      </div>
      `;
    });

    listaSvihZadataka.innerHTML = innerHTML;
  }
}


function  filterSelect(lista, filter) {

  console.log(lista, filter);

  if(filter === 'abecednofilter') {
    console.log('tu sam');
    

  }
  

}