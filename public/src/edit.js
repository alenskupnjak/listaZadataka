const snimiZapisBtn = document.getElementById('snimiZapis');
const povratakBtn = document.getElementById('povratak');
const zadatakInput = document.getElementById('edit-zadatak-naziv');
const zadatakTextInput = document.getElementById('edit-zadatak-text');

console.log(window.document);

console.log(zadatakInput);
console.log(zadatakInput.value);

console.log(moment());
console.log(moment().format());
console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
let datumStamp = moment().valueOf();
console.log(datumStamp);
console.log(location);
console.log(location.hash);
console.log(location.hash.substr(1));

console.log(moment(datumStamp).format('MM/DD/YYYY'));

console.log(new Date());

let date = new Date(datumStamp);
console.log(date);

console.log(moment(new Date()));
console.log(moment().date());

const now = new Date();
const timestamp = now.getTime();
console.log(timestamp);

let zadatakEdit = usnimiEdit(location.hash.substr(1))
console.log(zadatakEdit);


if(zadatakEdit) {
  zadatakInput.value = zadatakEdit.naziv
  zadatakTextInput.textContent = zadatakEdit.text
}

console.log(zadatakInput.textContent);




// snimanje zapisa na local disk i vracanje na index.html
snimiZapisBtn.addEventListener('click', (e) => {
  if (zadatakInput.value === '' || zadatakTextInput === '') {
    alert('Jedno polje prazno');
    return;
  }

  let zapis = {
    id: location.hash.substr(1),
    kreirano: new Date().getTime(),
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
