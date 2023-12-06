const titre = document.querySelector('#titre');
const p = document.querySelector('p');
const button = document.querySelector('button');
const listSutates = document.querySelector('#listSutates');
tabNmbers = [];
document.addEventListener('DOMContentLoaded', async function loadListSurat() {

   requete  = await fetch('http://api.alquran.cloud/v1/surah');
    let response = await requete.json();
    let tabList = response.data;
   console.log(tabList);
    tabList.forEach(surat => {
    
        //console.log(surat.englishName);
        listSutates.innerHTML +=`<option value="${surat.number}">${surat.englishName}</option>`;
    });

})

function showContent() {
   tabAyahs.forEach(ayah => {
      p.innerHTML +=  `${ayah.text}<span>${ayah.numberInSurah}</span><br>`; 
   })
}

let requete = '';
let sourate = ''; 
listSutates.addEventListener('change', async function loadSurat(e) {
   let numSurate = e.target.value
      console.log(numSurate);
      switch (numSurate) {
         case '1':
            requete = await fetch('http://api.alquran.cloud/v1/surah/1');
          sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '2':
            requete = await fetch('http://api.alquran.cloud/v1/surah/2');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '3':
            requete = await fetch('http://api.alquran.cloud/v1/surah/3');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '4':
            requete = await fetch('http://api.alquran.cloud/v1/surah/4');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '5':
            requete = await fetch('http://api.alquran.cloud/v1/surah/5');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '6':
            requete = await fetch('http://api.alquran.cloud/v1/surah/6');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '7':
            requete = await fetch('http://api.alquran.cloud/v1/surah/7');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '8':
            requete = await fetch('http://api.alquran.cloud/v1/surah/8');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '9':
            requete = await fetch('http://api.alquran.cloud/v1/surah/9');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '10':
            requete = await fetch('http://api.alquran.cloud/v1/surah/10');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '11':
            requete = await fetch('http://api.alquran.cloud/v1/surah/11');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '12':
            requete = await fetch('http://api.alquran.cloud/v1/surah/12');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '13':
            requete = await fetch('http://api.alquran.cloud/v1/surah/13');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '14':
            requete = await fetch('http://api.alquran.cloud/v1/surah/14');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '15':
            requete = await fetch('http://api.alquran.cloud/v1/surah/15');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '16':
            requete = await fetch('http://api.alquran.cloud/v1/surah/16');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '17':
            requete = await fetch('http://api.alquran.cloud/v1/surah/17');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '18':
            requete = await fetch('http://api.alquran.cloud/v1/surah/18');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '19':
            requete = await fetch('http://api.alquran.cloud/v1/surah/19');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '20':
            requete = await fetch('http://api.alquran.cloud/v1/surah/20');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '21':
            requete = await fetch('http://api.alquran.cloud/v1/surah/21');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '22':
            requete = await fetch('http://api.alquran.cloud/v1/surah/22');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '23':
            requete = await fetch('http://api.alquran.cloud/v1/surah/23');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '24':
            requete = await fetch('http://api.alquran.cloud/v1/surah/24');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '25':
            requete = await fetch('http://api.alquran.cloud/v1/surah/25');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '26':
            requete = await fetch('http://api.alquran.cloud/v1/surah/26');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '27':
            requete = await fetch('http://api.alquran.cloud/v1/surah/27');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '28':
            requete = await fetch('http://api.alquran.cloud/v1/surah/28');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '29':
            requete = await fetch('http://api.alquran.cloud/v1/surah/29');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '30':
            requete = await fetch('http://api.alquran.cloud/v1/surah/30');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '31':
            requete = await fetch('http://api.alquran.cloud/v1/surah/31');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '32':
            requete = await fetch('http://api.alquran.cloud/v1/surah/32');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '33':
            requete = await fetch('http://api.alquran.cloud/v1/surah/33');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '34':
            requete = await fetch('http://api.alquran.cloud/v1/surah/34');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '35':
            requete = await fetch('http://api.alquran.cloud/v1/surah/35');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '36':
            requete = await fetch('http://api.alquran.cloud/v1/surah/36');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '37':
            requete = await fetch('http://api.alquran.cloud/v1/surah/37');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '38':
            requete = await fetch('http://api.alquran.cloud/v1/surah/38');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '1':
            requete = await fetch('http://api.alquran.cloud/v1/surah/39');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '40':
            requete = await fetch('http://api.alquran.cloud/v1/surah/40');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '41':
            requete = await fetch('http://api.alquran.cloud/v1/surah/41');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '42':
            requete = await fetch('http://api.alquran.cloud/v1/surah/42');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '43':
            requete = await fetch('http://api.alquran.cloud/v1/surah/43');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '44':
            requete = await fetch('http://api.alquran.cloud/v1/surah/44');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '45':
            requete = await fetch('http://api.alquran.cloud/v1/surah/45');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '46':
            requete = await fetch('http://api.alquran.cloud/v1/surah/46');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '47':
            requete = await fetch('http://api.alquran.cloud/v1/surah/47');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '48':
            requete = await fetch('http://api.alquran.cloud/v1/surah/48');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '49':
            requete = await fetch('http://api.alquran.cloud/v1/surah/49');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '50':
            requete = await fetch('http://api.alquran.cloud/v1/surah/50');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '51':
            requete = await fetch('http://api.alquran.cloud/v1/surah/51');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '52':
            requete = await fetch('http://api.alquran.cloud/v1/surah/52');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '53':
            requete = await fetch('http://api.alquran.cloud/v1/surah/53');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '54':
            requete = await fetch('http://api.alquran.cloud/v1/surah/54');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '55':
            requete = await fetch('http://api.alquran.cloud/v1/surah/55');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '56':
            requete = await fetch('http://api.alquran.cloud/v1/surah/56');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '58':
            requete = await fetch('http://api.alquran.cloud/v1/surah/58');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '59':
            requete = await fetch('http://api.alquran.cloud/v1/surah/59');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '60':
            requete = await fetch('http://api.alquran.cloud/v1/surah/60');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '61':
            requete = await fetch('http://api.alquran.cloud/v1/surah/61');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '62':
            requete = await fetch('http://api.alquran.cloud/v1/surah/62');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '63':
            requete = await fetch('http://api.alquran.cloud/v1/surah/63');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '64':
            requete = await fetch('http://api.alquran.cloud/v1/surah/64');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '65':
            requete = await fetch('http://api.alquran.cloud/v1/surah/65');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '66':
            requete = await fetch('http://api.alquran.cloud/v1/surah/66');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '67':
            requete = await fetch('http://api.alquran.cloud/v1/surah/67');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '68':
            requete = await fetch('http://api.alquran.cloud/v1/surah/68');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '69':
            requete = await fetch('http://api.alquran.cloud/v1/surah/69');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '70':
            requete = await fetch('http://api.alquran.cloud/v1/surah/70');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '71':
            requete = await fetch('http://api.alquran.cloud/v1/surah/71');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '72':
            requete = await fetch('http://api.alquran.cloud/v1/surah/72');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '73':
            requete = await fetch('http://api.alquran.cloud/v1/surah/73');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '74':
            requete = await fetch('http://api.alquran.cloud/v1/surah/74');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '75':
            requete = await fetch('http://api.alquran.cloud/v1/surah/75');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '76':
            requete = await fetch('http://api.alquran.cloud/v1/surah/76');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '78':
            requete = await fetch('http://api.alquran.cloud/v1/surah/78');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '79':
            requete = await fetch('http://api.alquran.cloud/v1/surah/79');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '80':
            requete = await fetch('http://api.alquran.cloud/v1/surah/80');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '81':
            requete = await fetch('http://api.alquran.cloud/v1/surah/81');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '82':
            requete = await fetch('http://api.alquran.cloud/v1/surah/82');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '83':
            requete = await fetch('http://api.alquran.cloud/v1/surah/83');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '84':
            requete = await fetch('http://api.alquran.cloud/v1/surah/84');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '85':
            requete = await fetch('http://api.alquran.cloud/v1/surah/85');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '86':
            requete = await fetch('http://api.alquran.cloud/v1/surah/86');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '87':
            requete = await fetch('http://api.alquran.cloud/v1/surah/87');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '88':
            requete = await fetch('http://api.alquran.cloud/v1/surah/88');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '89':
            requete = await fetch('http://api.alquran.cloud/v1/surah/89');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '90':
            requete = await fetch('http://api.alquran.cloud/v1/surah/90');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '91':
            requete = await fetch('http://api.alquran.cloud/v1/surah/91');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '92':
            requete = await fetch('http://api.alquran.cloud/v1/surah/92');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '93':
            requete = await fetch('http://api.alquran.cloud/v1/surah/93');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '94':
            requete = await fetch('http://api.alquran.cloud/v1/surah/94');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '95':
            requete = await fetch('http://api.alquran.cloud/v1/surah/95');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '96':
            requete = await fetch('http://api.alquran.cloud/v1/surah/96');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '97':
            requete = await fetch('http://api.alquran.cloud/v1/surah/97');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '98':
            requete = await fetch('http://api.alquran.cloud/v1/surah/98');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '99':
            requete = await fetch('http://api.alquran.cloud/v1/surah/99');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '100':
            requete = await fetch('http://api.alquran.cloud/v1/surah/100');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '101':
            requete = await fetch('http://api.alquran.cloud/v1/surah/101');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '102':
            requete = await fetch('http://api.alquran.cloud/v1/surah/102');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '103':
            requete = await fetch('http://api.alquran.cloud/v1/surah/103');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '104':
            requete = await fetch('http://api.alquran.cloud/v1/surah/104');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '105':
            requete = await fetch('http://api.alquran.cloud/v1/surah/105');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '106':
            requete = await fetch('http://api.alquran.cloud/v1/surah/106');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '107':
            requete = await fetch('http://api.alquran.cloud/v1/surah/107');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '108':
            requete = await fetch('http://api.alquran.cloud/v1/surah/108');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '109':
            requete = await fetch('http://api.alquran.cloud/v1/surah/109');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '110':
            requete = await fetch('http://api.alquran.cloud/v1/surah/110');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '111':
            requete = await fetch('http://api.alquran.cloud/v1/surah/111');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '112':
            requete = await fetch('http://api.alquran.cloud/v1/surah/112');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '113':
            requete = await fetch('http://api.alquran.cloud/v1/surah/113');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         case '114':
            requete = await fetch('http://api.alquran.cloud/v1/surah/114');
            sourate  = await requete.json();
            tabAyahs = sourate.data.ayahs;
            console.log(tabAyahs);
            showContent()
            break;
         default:
            break;
      }
 
})
