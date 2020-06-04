// let zadaci

function ucitajLocalStorage() {
  let localStorageData = localStorage.getItem('listaZadataka');
  if (localStorageData) {
    return JSON.parse(localStorageData)
  } else {
     return [];
  }  
}


function kreirajZapis() {
  const id = uuidv4();
  location.assign(`edit.html#${id}`)
}


function snimiZapisLocalStorage(zapis) {
  localStorage.setItem('listaZadataka', JSON.stringify(zapis))
  // localStorage.setItem('listaZadataka', zapis)
}


function snimiZapis(zapis) {
  let listaZadataka = ucitajLocalStorage()
  console.log(listaZadataka);
  
  listaZadataka.push(zapis)
  snimiZapisLocalStorage(listaZadataka)
}







