const snimiZapisBtn = document.getElementById('snimiZapis')
const zadatakInput = document.getElementById('edit-zadatak-naziv')
const zadatakTextInput = document.getElementById('edit-zadatak-text')




snimiZapisBtn.addEventListener('click', (e) => {
  
if(zadatakInput.value === "" || zadatakTextInput  === '') {
  alert('Jedno polje prazno');
  return
}

  // console.log(e);
  // console.log(location)
  // console.log(location.hash)
  // console.log(location.hash.substr(1))
  // console.log(st);
  // console.log(moment(new Date()));
  // console.log(moment().date());
  // console.log(moment());
  // console.log(moment().format());
  // console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  // console.log(moment().valueOf());
  // console.log(new Date())
  
  // const now = new Date()
  // const timestamp = now.getTime()
  // console.log(timestamp);

  
  
  let zapis = {
    id:location.hash.substr(1),
    kreirano:  new Date().getTime(),
    naziv: zadatakInput.value,
    text: zadatakTextInput.value,
    izvrsenZadatak: false
  }

  snimiZapis(zapis)
  location.assign('index.html')

})