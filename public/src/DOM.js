const listaSvihZadataka = document.getElementById('listaZadataka')


// osvježavanje stranice Index.html
function renderDOM(listaZadataka) {
  if(listaZadataka.length === 0) {
    listaSvihZadataka.innerHTML=''
  } else {
    let innerHTML =''
    
    listaZadataka.forEach(element => {
      innerHTML +=`
      <div class="zadatak" id="${element.id}">
      <a href="edit.html" class="link">
        <p id="zadatak-naziv">${element.text}</p>
        <textarea id="zadatak-text" cols="50" rows="5" disabled></textarea>
      </a>
      <label for="zadatakIzvrsen">${moment(element.kreirano).format("MM/DD/YYYY")}</label >
      <input type="checkbox" id="zadatakIzvrsen" ${element.izvrsenZadatak === true ? "checked" : ''}>
      <img src="img/delete.png" alt="" class="btn brisi">
      </div>
      `
    });
    
    listaSvihZadataka.innerHTML = innerHTML

  }
}

