const titre = document.querySelector('#titre');
const p = document.querySelector('p');
const button = document.querySelector('button');
const listSutates = document.querySelector('#listSutates');
tabNmbers = [];
async function loadListSurat() {

   requete = await fetch('http://api.alquran.cloud/v1/surah');
   let response = await requete.json();
   let tabList = response.data;
   console.log(tabList);
   tabList.forEach(surat => {

      //console.log(surat.englishName);
      listSutates.innerHTML += `<option value="${surat.number}">${surat.number}: ${surat.englishName}</option>`;
   });

}
loadListSurat()
function showContent() {
   p.innerHTML = '';
   tabAyahs.forEach(ayah => {
      p.innerHTML += `${ayah.text}<span>${ayah.numberInSurah}</span><br>`;
      titre.innerHTML = `(${sourate.data.numberOfAyahs} Ayahs) ${sourate.data.name}`;
   })
}

let requete = '';
let sourate = '';
listSutates.addEventListener('change', async function loadSurat(e) {
   let numSurate = e.target.value
   console.log(numSurate);
   requete = await fetch(`http://api.alquran.cloud/v1/surah/${numSurate}`);
   sourate = await requete.json();
   console.log(sourate.data);
   tabAyahs = sourate.data.ayahs;
   console.log(tabAyahs);
   showContent();
})
