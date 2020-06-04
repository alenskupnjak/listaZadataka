const kreirajZadatak = document.getElementById('kreiraj-zadatak')
const listaZadatakaBrisi = document.getElementById('listaZadataka')







  


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
console.log(obrisiZadatak);



// EventListen- i
kreirajZadatak.addEventListener('click',kreirajZapis)
listaZadatakaBrisi.addEventListener('click',(e)=> {
  let id = e.path[2].id
  console.log(e);
  console.log(e.path);
  console.log(e.path[2].id);
  console.log(e.srcElement);
  console.log(e.srcElement.className);
  
  if(e.srcElement.className === 'far fa-trash-alt fa-2x del') {
   
    console.log(id);
    
    // brisemo podatak iz lokalStorage
    obrisiPodatak(id,listaZadataka)
  }
  renderDOM(listaZadataka)
}
)


