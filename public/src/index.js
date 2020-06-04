const kreirajZadatak = document.getElementById('kreiraj-zadatak')



  
let zapis1 = {
  id:location.hash.substr(1),
  kreirano:  new Date().getTime(),
  naziv: 'xxx',
  text: 'dddd',
  izvrsenZadatak: false
}
let zapis2 = {
  id:location.hash.substr(1),
  kreirano:  new Date().getTime(),
  naziv: 'xxx',
  text: 'dddd',
  izvrsenZadatak: false
}

 let filteri = {
  zadatak: '',
  kreiranjeVrijeme:'',
  modificiranjeVrijeme: ''
}




let listaZadataka = ucitajLocalStorage()


renderDOM(listaZadataka)



kreirajZadatak.addEventListener('click',kreirajZapis)


