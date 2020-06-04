const listaSvihZadataka = document.getElementById('listaZadataka');

// osvježavanje stranice Index.html
function renderDOM(listaZadataka, filteri) {
  console.log(listaZadataka, filteri);

  if (listaZadataka.length === 0) {
    listaSvihZadataka.innerHTML = '';
  } else {
    let innerHTML = '';

    // prvo filtriramo listu prema izvrsenim zadacima
    if (filteri.izvrseniZadaci === true) {
      listaZadataka = listaZadataka.filter((data) => {
        return data.izvrsenZadatak === true;
      });
    }

    // filtriramo listu prema selekriranome
    listaZadataka = filterSelect(listaZadataka, filteri.select)
    console.log(listaZadataka);

    // filtriramo listu prema unosu
    listaZadataka = filterUnos(listaZadataka, filteri.unos)


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
    lista.sort((a,b)=> {
      if(a.naziv < b.naziv) {
        return -1
      }
      if(a.naziv > b.naziv) {
        return 1
      }
      if(a.naziv === b.naziv) {
        return 0
      }
    })
  }

  if(filter === 'kreiranfilter') {
    lista.sort((a,b)=> {
      if(a.kreirano < b.kreirano) {
        return -1
      }
      if(a.kreirano > b.kreirano) {
        return 1
      }
      if(a.kreirano === b.kreirano) {
        return 0
      }
    })
  }

  if(filter === 'editiranfilter') {
    lista.sort((a,b)=> {
      if(a.editirano < b.editirano) {
        return -1
      }
      if(a.editirano > b.editirano) {
        return 1
      }
      if(a.editirano === b.editirano) {
        return 0
      }
    })
  }
   return lista
}

function  filterUnos(lista, filter) {

  console.log(lista, filter);

  lista = lista.filter(data => {
    if (data.naziv.includes(filter)) {
      console.log('nasao sam');
      return data
    }
  })

  console.log(lista);
  
  return lista
}