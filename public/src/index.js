const kreirajZadatak = document.getElementById('kreiraj-zadatak');
const sveOperacije = document.getElementById('listaZadataka');
const izvrseniZadaci = document.getElementById('zadatakIzvrsenLista');
const filterUnosInput = document.getElementById('filter');
const filterSelectBtn = document.getElementById('filter-select');

let filteri = {
  izvrseniZadaci: false,
  select: 'abecednofilter',
  kreiranjeVrijeme: '',
  modificiranjeVrijeme: '',
  unos: '',
};

// Učiravanje podataka sa lokal storage
let listaZadataka = ucitajLocalStorage();

// osvježavanje stranice
renderDOM(listaZadataka, filteri);
const obrisiZadatak = document.querySelectorAll('.brisi');

// EventListen- i
kreirajZadatak.addEventListener('click', kreirajZapis);

// slusa za operaciju brisanja, izvršeni zadaci
sveOperacije.addEventListener('click', (e) => {
  // console.log(e);
  // console.log(e.path);
  // console.log(e.srcElement);
  // console.log(e.srcElement.id);
  // console.log(e.srcElement.className);

  if (e.srcElement.className === 'btn brisi') {
    let id = e.path[1].id;
    console.log(id);

    // brisemo podatak iz lokalStorage
    obrisiPodatak(id, listaZadataka);
  }

  if (e.srcElement.id === 'zadatakIzvrsen') {
    let id = e.path[1].id;
    console.log(id);

    // mjenjamo podatak izvrsenog zadatka u lokalStorage
    zadatakIzvrsenNeizvrsen(id, listaZadataka);
  }

  renderDOM(listaZadataka, filteri);
});

// Prikazuje listu svih zadataka
izvrseniZadaci.addEventListener('click', (e) => {
  // console.log(e);
  // console.log(e.target.checked);
  // console.log(filteri);

  if (e.target.checked) {
    filteri.izvrseniZadaci = true;
  } else {
    filteri.izvrseniZadaci = false;
  }
  renderDOM(listaZadataka, filteri);
});

filterSelectBtn.addEventListener('click', (e) => {
  console.log(e);
  console.log(e.target.value);
  filteri.select = e.target.value;
  renderDOM(listaZadataka, filteri);
});

filterUnosInput.addEventListener('input', (e) => {
  console.log(e);
  console.log(e.target.value);
  filteri.unos = e.target.value;
  renderDOM(listaZadataka, filteri);
});



// Izmjena na localSoorage
window.addEventListener('storage', (e) => {
  let storage
  console.log(e);
  console.log(e.key);
  console.log(e.storageArea);

  if (e.key === 'listaZadataka') {
   let storage = JSON.parse(e.storageArea)
  }


  console.log(storage);


//   if (e.key === 'notes') {
//     notes = JSON.parse(e.newValue)
//     renderNotes(notes, filters)
// }

  // renderDOM(storage,filteri)
});
