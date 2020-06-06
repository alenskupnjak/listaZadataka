const kreirajZadatak = document.getElementById('kreiraj-zadatak');
const sveOperacije = document.getElementById('listaZadataka');
const izvrseniZadaci = document.getElementById('zadatakIzvrsenLista');
const filterUnosInput = document.getElementById('filter');
const filterSelectBtn = document.getElementById('filter-select');
const porukaBrisanja = document.getElementById('poruke');

//definicija svih filtera
let filteri = {
  izvrseniZadaci: false,
  select: 'abecednofilter',
  kreiranjeVrijeme: '',
  modificiranjeVrijeme: '',
  unos: '',
};


// učitavanje podataka sa lokal storage
let listaZadataka = ucitajLocalStorage();


// osvježavanje stranice
renderDOM(listaZadataka, filteri);
const obrisiZadatak = document.querySelectorAll('.brisi');


// EventListen- i
kreirajZadatak.addEventListener('click', kreirajZapis);


// slusa za operacije brisanja, izvršeni zadaci
sveOperacije.addEventListener('click', (e) => {
  // brisemo podatak iz lokalStorage
  if (e.srcElement.className === 'btn brisi') {
    let id = e.path[2].id;

    obrisiPodatak(id, listaZadataka);
    porukaBrisanja.classList.add('vrati-poruku');

    setTimeout(() => {
      porukaBrisanja.classList.remove('vrati-poruku');
    }, 4000);
  }

  // preklopka zadatak izvršen/neizvršen
  if (e.srcElement.id === 'zadatakIzvrsen') {
    let id = e.path[2].id;

    // mjenjamo podatak izvrsenog zadatka u lokalStorage
    zadatakIzvrsenNeizvrsen(id, listaZadataka);
  }

  renderDOM(listaZadataka, filteri);
});


// Prikazuje listu svih zadataka
izvrseniZadaci.addEventListener('click', (e) => {
  if (e.target.checked) {
    filteri.izvrseniZadaci = true;
  } else {
    filteri.izvrseniZadaci = false;
  }
  renderDOM(listaZadataka, filteri);
});


// firtriranje zadataka prema padajucem meniju
filterSelectBtn.addEventListener('click', (e) => {
  filteri.select = e.target.value;
  renderDOM(listaZadataka, filteri);
});


// filtriranje zadataka prema naslovu unosom texta
filterUnosInput.addEventListener('input', (e) => {
  console.log(e);
  console.log(e.target.value);
  filteri.unos = e.target.value;
  renderDOM(listaZadataka, filteri);
});
