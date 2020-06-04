const listaSvihZadataka = document.getElementById('listaZadataka')


function renderDOM(listaZadataka) {
  
  if(listaZadataka.length === 0) {
    listaSvihZadataka.innerHTML=''
  } else {
    let innerHTML =''
    
    listaZadataka.forEach(element => {
      console.log(element);
      console.log(element.id);
      // innerHTML = '<p id="zadatak-naziv">Naziv zadazka</p>'
      innerHTML +=`
      <div class="zadatak" id="${element.id}">
      <a href="edit.html" class="link">
        <p id="zadatak-naziv">${element.text}</p>
        <textarea id="zadatak-text" cols="50" rows="5" disabled></textarea>
      </a>
      <label for="zadatakIzvrsen">Kreirano</label >
      <input type="checkbox" id="zadatakIzvrsen">
      <button id="brisi" class="btn brisi"><i class="far fa-trash-alt fa-2x del"></i></button>
      </div>
      `
    });

    listaSvihZadataka.innerHTML = innerHTML

  }


  
}