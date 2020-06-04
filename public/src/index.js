const kreirajZadatak = document.getElementById('kreiraj-zadatak')
const sveOperacije = document.getElementById('listaZadataka')
const izvrseniZadaci = document.getElementById('zadatakIzvrsenLista')




 let filteri = {
  zadatak: '',
  kreiranjeVrijeme:'',
  modificiranjeVrijeme: ''
}



// Učiravanje podataka sa lokal storage
let listaZadataka = ucitajLocalStorage()

// osvježavanje stranice
renderDOM(listaZadataka)
const obrisiZadatak = document.querySelectorAll('.brisi')




// EventListen- i
kreirajZadatak.addEventListener('click',kreirajZapis)


sveOperacije.addEventListener('click',(e)=> {

  console.log(e);
  console.log(e.path);
  console.log(e.srcElement);
  console.log(e.srcElement.id);
  console.log(e.srcElement.className);
  
  if(e.srcElement.className === 'btn brisi') {
    let id = e.path[1].id
    console.log(id);
    
    // brisemo podatak iz lokalStorage
    obrisiPodatak(id,listaZadataka)
  }

  if(e.srcElement.id === 'zadatakIzvrsen') {
   let id = e.path[1].id
    console.log(id);
    
    // mjenjamo podatak izvrsenog zadatka u lokalStorage
    zadatakIzvrsenNeizvrsen(id,listaZadataka)
  }

  renderDOM(listaZadataka)
}
)

izvrseniZadaci.addEventListener('click', (e)=> {
  console.log(e);
  console.log(e.target.checked);
  
  if(e.target.checked === true) {
    renderDOM(listaZadataka,'izvrseniZadaci')
  } else {
    renderDOM(listaZadataka)
  }

})



