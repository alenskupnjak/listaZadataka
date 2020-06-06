const snimiZapisBtn = document.getElementById('snimiZapis');
const povratakBtn = document.getElementById('povratak');
const zadatakInput = document.getElementById('edit-naziv');
const zadatakTextInput = document.getElementById('edit-text');
const kreirano = document.getElementById('kreirano');
const protekloVrijeme = document.getElementById('vrijeme-proteklo');


// Usnimavanje pojedinacnog podatka
let zadatakEdit = usnimiEdit(location.hash.substr(1))

// postavljamo text u naslovu ako je zadatak vec kreiran
if(zadatakEdit) {
  protekloVrijeme.textContent = 'Mijenjano ' + moment(zadatakEdit.editirano).fromNow()
}


// ako se zapis editira upisuje podatke zadatak kreiran DA/NE
if(zadatakEdit) {
  zadatakInput.value = zadatakEdit.naziv
  zadatakTextInput.textContent = zadatakEdit.text
  kreirano.textContent = 'Zadatak kreiran: ' + moment(zadatakEdit.kreirano).format('MM/DD/YYYY, h:mm:ss a')
} else {
  kreirano.textContent = 'Zadatak još nije kreiran!'
}


// snimanje zapisa na localDisk i vracanje na index.html
snimiZapisBtn.addEventListener('click', (e) => {
  if (zadatakInput.value === '' || zadatakTextInput === '') {
    alert('Jedno polje prazno');
    return;
  }

  // definran zapis
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
