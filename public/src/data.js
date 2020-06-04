// Ucitavanje podataka sa local storage
function ucitajLocalStorage() {
  let localStorageData = localStorage.getItem('listaZadataka');
  if (localStorageData) {
    return JSON.parse(localStorageData);
  } else {
    return [];
  }
}

// prelazak na stranicu Edit.html
function kreirajZapis() {
  const id = uuidv4();
  location.assign(`edit.html#${id}`);
}

// snimanje podataka u local storage
function snimiZapisLocalStorage(zapis) {
  localStorage.setItem('listaZadataka', JSON.stringify(zapis));
}

//
function snimiZapis(zapis) {
  console.log(zapis);
  let listaZadataka = ucitajLocalStorage();
  console.log(listaZadataka);

  let pronasao = listaZadataka.find((data) => {
    return data.id === zapis.id;
  });

  if (pronasao) {
    pronasao.naziv = zapis.naziv;
    pronasao.text = zapis.text;
  } else {
    listaZadataka.push(zapis);
  }

  snimiZapisLocalStorage(listaZadataka);
}

// brisanje zadatka sa liste
function obrisiPodatak(id, listaZadataka) {
  let index;
  listaZadataka.forEach((element, i) => {
    // console.log(element,i);
    if (element.id === id) {
      index = i;
    }
  });

  listaZadataka.splice(index, 1);
  // snimamo u local storage
  snimiZapisLocalStorage(listaZadataka);
}

// mijenja zadatak iz izvršenog u neizvršenog i obratno
function zadatakIzvrsenNeizvrsen(id, listaZadataka) {
  listaZadataka.forEach((zadatak) => {
    if (zadatak.id === id) {
      zadatak.izvrsenZadatak = !zadatak.izvrsenZadatak;
    }
  });

  // snimanje promjene na Local disk
  snimiZapisLocalStorage(listaZadataka);
}

// povlaci podatke za edit
function usnimiEdit(id) {
  let listaZadataka = ucitajLocalStorage();
  return listaZadataka.find((data) => {
    return data.id === id;
  });
}
