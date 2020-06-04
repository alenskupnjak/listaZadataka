const snimiZapisBtn = document.getElementById('snimiZapis');
const povratakBtn = document.getElementById('povratak');
const zadatakInput = document.getElementById('edit-naziv');
const zadatakTextInput = document.getElementById('edit-text');
const kreirano = document.getElementById('kreirano');


// Usnimavanje pojedinacnog podatka
let zadatakEdit = usnimiEdit(location.hash.substr(1))


// ako se zapis editira upisuje podatke
if(zadatakEdit) {
  zadatakInput.value = zadatakEdit.naziv
  zadatakTextInput.textContent = zadatakEdit.text
  kreirano.textContent = moment(zadatakEdit.kreirano).format('MM/DD/YYYY, h:mm:ss a')
} else {
  kreirano.textContent = 'Zadatak jos nije kreiran!'
}


// snimanje zapisa na localDisk i vracanje na index.html
snimiZapisBtn.addEventListener('click', (e) => {
  if (zadatakInput.value === '' || zadatakTextInput === '') {
    alert('Jedno polje prazno');
    return;
  }

  let zapis = {
    id: location.hash.substr(1),
    kreirano: new Date().getTime(),
    editirano: new Date().getTime(),
    naziv: zadatakInput.value,
    text: zadatakTextInput.value,
    izvrsenZadatak: false,
  };

  // snimanje zapisa u lokal storage
  snimiZapis(zapis);
  location.assign('index.html');
});

// vracanje na index stranicu bez snimanja
povratakBtn.addEventListener('click', () => {
  location.assign('index.html');
});
