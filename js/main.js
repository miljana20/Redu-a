// - Učitavanje stranice -
let ucitavanje = document.querySelector("#ucitavanje");
let logo = document.querySelector(".logo-u");
let logoSpan = document.querySelectorAll(".dio");

window.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add("active");
            }, (idx + 1) * 400)
        })

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove("active");
                    span.classList.add("fade");
                }, (idx + 1) * 50)
            })
        }, 3000);

        setTimeout(()=>{
            ucitavanje.style.top = "-100vh";
        }, 3500)
    })
})

// - Navigacija - 
function navigacija(){

    const navigacioniMeni = document.querySelector('#nav');

    const navigacioniMeniMini = document.querySelector('#footer-nav');

    const imenovanjeNavigacije = [
    'Početna',
    'Odaberi akciju',
    'Aktuelno',
    'Zašto mi',
    'Galerija',
    'Utisci',
    'Kontakt'
    ];

    const linkovanjeNavigacije = [
    'index.html',
    '#akcije',
    '#aktuelno',
    '#mi',
    '#galerija',
    '#utisci',
    '#kontakt'
    ];

    //Navigacioni meni u header-u za veće rezolucije
    for (let i = 0; i < linkovanjeNavigacije.length; i++) {
        let elementListe = document.createElement('li');
        let linkNavigacije = document.createElement('a');
        let imeNavigacije = document.createTextNode(imenovanjeNavigacije[i]);
        linkNavigacije.setAttribute('href', linkovanjeNavigacije[i]);
        linkNavigacije.setAttribute('class', 'b-color');
        linkNavigacije.append(imeNavigacije);
        elementListe.append(linkNavigacije);
        navigacioniMeni.append(elementListe);
    }

    //Navigacioni meni u footer-u
    for (let i = 0; i < linkovanjeNavigacije.length; i++) {
        let elementListe = document.createElement('li');
        let linkNavigacije = document.createElement('a');
        let imeNavigacije = document.createTextNode(imenovanjeNavigacije[i]);
        linkNavigacije.setAttribute('href', linkovanjeNavigacije[i]);
        linkNavigacije.append(imeNavigacije);
        elementListe.append(linkNavigacije);
        navigacioniMeniMini.append(elementListe)
    }
       
}

// - Galerija -
let slikeIzGalerije = document.querySelectorAll(".galerija");
let najskorijeOtvorena;
let sirinaProzora = window.innerWidth;

if(slikeIzGalerije){
    slikeIzGalerije.forEach(function(slika, index) {

        slika.onclick = function() {

            let adresaSlike = document.getElementById("slika1").getAttribute("src");//naći kako učitati bilo koju sliku
            let urlSlike = adresaSlike.split("/img/");
            let noviUrlSlike = urlSlike[1];

            najskorijeOtvorena = index + 1;

            let container = document.body;
            let novProzorSlike = document.createElement("div");
            container.appendChild(novProzorSlike);
            novProzorSlike.setAttribute("class", "prozor-slike");
            novProzorSlike.setAttribute("onclick", "zatvoriSliku()");

            let novaSlika = document.createElement("img");
            novProzorSlike.appendChild(novaSlika);
            novaSlika.setAttribute("src", "assets/img/" + noviUrlSlike);
            novaSlika.setAttribute("id", "trenutna-slika");

            novaSlika.onload = function() {

                let novoNazadDugme = document.createElement("a");
                let textNazad = document.createTextNode("<");
                novoNazadDugme.appendChild(textNazad);
                container.appendChild(novoNazadDugme);
                novoNazadDugme.setAttribute("class", "nazad-dugme");
                novoNazadDugme.setAttribute("onclick", "promijeniSliku(1)");
    
                let novoNaprijedDugme = document.createElement("a");
                let textNaprijed = document.createTextNode(">");
                novoNaprijedDugme.appendChild(textNaprijed);
                container.appendChild(novoNaprijedDugme);
                novoNaprijedDugme.setAttribute("class", "naprijed-dugme");
                novoNaprijedDugme.setAttribute("onclick", "promijeniSliku(0)"); 
            }
        }
    });
}
function zatvoriSliku() {

    document.querySelector(".prozor-slike").remove();
    document.querySelector(".naprijed-dugme").remove();
    document.querySelector(".nazad-dugme").remove();
}
function promijeniSliku(smijer) {

    document.querySelector("#trenutna-slika").remove();

    let dodajSliku = document.querySelector(".prozor-slike");
    let novaSlika = document.createElement("img");
    dodajSliku.appendChild(novaSlika);

    let nadjiSmijer;
    if(smijer === 1) {
        nadjiSmijer = najskorijeOtvorena + 1;
        if(nadjiSmijer > slikeIzGalerije.length){
            nadjiSmijer = 1;
        }
    }
    else if(smijer === 0){
        nadjiSmijer = najskorijeOtvorena - 1;
        if(nadjiSmijer < 1){
            nadjiSmijer = slikeIzGalerije.length;
        }
    }

    novaSlika.setAttribute("src","assets/img/img"+ nadjiSmijer +"ingallery.jpg");
    novaSlika.setAttribute("id","trenutna-slika");

    najskorijeOtvorena = nadjiSmijer;
}

//- Forma u kartici -

//dinamička padajuća lista
var nizBrojLjudi = new Array("1","2","3","4","5");

var tagSelect = document.createElement("select");
tagSelect.setAttribute("id", "ddl-brljudi");
tagSelect.setAttribute("class", "form-control");

var prviTagOption = document.createElement("option");
prviTagOption.setAttribute("value", "0");
var sadrzajPrvogOption = document.createTextNode("Izaberite broj mjesta za rezervaciju...");

prviTagOption.appendChild(sadrzajPrvogOption);
tagSelect.appendChild(prviTagOption);

for(let i = 0; i < nizBrojLjudi.length; i++){
    var ostaliTagOption = document.createElement("option");
    ostaliTagOption.setAttribute("value", nizBrojLjudi[i]);

    var sadrzajOstalihOption = document.createTextNode(nizBrojLjudi[i]);

    ostaliTagOption.appendChild(sadrzajOstalihOption);
    tagSelect.appendChild(ostaliTagOption);
}

document.querySelector("#padajuca-lista").appendChild(tagSelect);

// - Validacija forme za prijavu -
function validacija1(){

    var korisnickoIme = document.getElementById('ime1').value;
    var korisnickiEmail = document.getElementById('email1').value;
    var korisnickiBroj = document.getElementById('broj1').value;
    var lozinkaKorisnika = document.getElementById('lozinka').value;
    var potvrdaLozinke = document.getElementById('potvrda-lozinke').value;

    let imeProvjera = /^[A-Za-z. ]{3,30}$/;
    let emailProvjera = /^[a-z0-9.]{3,}@[a-z]{3,}[.]{1}[a-z.]{2,6}$/ 
    let brojProvjera = /^[0]{1}[6]{1}[0-9]{9}$/
    let lozinkaProvjera = /^(?=.*[0*9])(?=.*[!@#$%&/*])[a-zA-Z0-9!@#$%&/*]{8,16}$/;

    if(imeProvjera.test(korisnickoIme)){
        document.getElementById('ime-error').innerHTML = " "
    }
    else{
        document.getElementById('ime-error').innerHTML = "** Neispravno ime!";
        return false;
    }
    
    if(emailProvjera.test(korisnickiEmail)){
        document.getElementById('email-error').innerHTML = " "
    }
    else{
        document.getElementById('email-error').innerHTML = "** Neispravan E-mail!";
        return false;
    }

    if(brojProvjera.test(korisnickiBroj)){
        document.getElementById('broj-error').innerHTML = " "
    }
    else{
        document.getElementById('broj-error').innerHTML = "** Neispravan broj!";
        return false;
    }

    if(naslovProvjera.test(naslovKorisnika)){
        document.getElementById('naslov-error').innerHTML = " "
    }
    else{
        document.getElementById('naslov-error').innerHTML = "** Upišite odgovarajući naslov!";
        return false;
    }

    if(porukaProvjera.test(porukaKorisnika)){
        document.getElementById('poruka-error').innerHTML = " "
    }
    else{
        document.getElementById('poruka-error').innerHTML = "** Poruka mora da sadrži odgovarajuće karaktere!";
        return false;
    }
    if(lozinkaProvjera.test(lozinkaKorisnika)){
        document.getElementById('lozinka-error').innerHTML = "** Neispravna lozinka!"
    }
    else{
        document.getElementById('lozinka-error').innerHTML = " ";
        return false;
    }

    if(lozinkaKorisnika.match(potvrdaLozinke)){
        document.getElementById('lozinka-error').innerHTML = "** Potvrdite lozinku!"
    }
    else{
        document.getElementById('lozinka-error').innerHTML = " ";
        return false;
    }
}

// - Kartica -
document.querySelector('#a').addEventListener('click', function(){
    document.querySelector('#kartica').classList.add('aktivirana');
});

document.querySelector('#kartica .close-btn').addEventListener('click', function(){
    document.querySelector('#kartica').classList.remove('aktivirana');
});

document.querySelector('#b').addEventListener('click', function(){
    document.querySelector('#kartica').classList.add('aktivirana');
});

document.querySelector('#kartica .close-btn').addEventListener('click', function(){
    document.querySelector('#kartica').classList.remove('aktivirana');
});

// - Validacija kontakt-forme -
function validacija(){

    var korisnickoIme = document.getElementById('ime').value;
    var korisnickiEmail = document.getElementById('email').value;
    var korisnickiBroj = document.getElementById('broj').value;
    var naslovKorisnika = document.getElementById('naslov').value;
    var porukaKorisnika = document.getElementById('poruka').value;

    let imeProvjera = /^[A-Za-z. ]{3,30}$/;
    let emailProvjera = /^[a-z0-9.]{3,}@[a-z]{3,}[.]{1}[a-z.]{2,6}$/
    let brojProvjera = /^[0]{1}[6]{1}[0-9]{9}$/
    let naslovProvjera = /^[A-Za-z0-9 .]{3,40}$/;
    let porukaProvjera = /^[A-Za-z0-9 .,]{3,2000}[.]{1}$/;

    if(imeProvjera.test(korisnickoIme)){
        document.getElementById('ime-error').innerHTML = " "
    }
    else{
        document.getElementById('ime-error').innerHTML = "** Neispravno ime!";
        return false;
    }
    
    if(emailProvjera.test(korisnickiEmail)){
        document.getElementById('email-error').innerHTML = " "
    }
    else{
        document.getElementById('email-error').innerHTML = "** Neispravan E-mail!";
        return false;
    }

    if(brojProvjera.test(korisnickiBroj)){
        document.getElementById('broj-error').innerHTML = " "
    }
    else{
        document.getElementById('broj-error').innerHTML = "** Neispravan broj!";
        return false;
    }

    if(naslovProvjera.test(naslovKorisnika)){
        document.getElementById('naslov-error').innerHTML = " "
    }
    else{
        document.getElementById('naslov-error').innerHTML = "** Upišite odgovarajući naslov!";
        return false;
    }

    if(porukaProvjera.test(porukaKorisnika)){
        document.getElementById('poruka-error').innerHTML = " "
    }
    else{
        document.getElementById('poruka-error').innerHTML = "** Poruka mora da sadrži odgovarajuće karaktere!";
        return false;
    }
}

// - Mini Filter galerija -
$(document).ready(function(){
    $('.odabir').click(function(){
        const value = $(this).attr('data-filter');
        $('.slajd').not('.'+value).hide('1000')
        $('.slajd').filter('.'+value).show('1000');
    })
})

// - Kartice za prijavu -

// - Statistika -
function statistika(){
    const statist = document.querySelector('#brojke');

    const ikonice = [
        'hiking',
        'users',
        'mountain',
        'route'
    ];

    const brojevi = [
        '2600',
        '600',
        '2800',
        '200'
    ]

    const nula = 0;

    const opisi = [
        'Godišnje prepješačimo km',
        'Broj članova',
        'Popnemo se u visine do',
        'Broj akcija u toku godine'
    ]

    for (let i = 0; i < brojevi.length; i++) {
        let statistikaBox = document.createElement('div');
        let ikonica = document.createElement('i');
        let broj = document.createElement('h4');
        let text = document.createElement('p');
        let ispisNule = document.createTextNode(nula);
        let ispisText = document.createTextNode(opisi[i]);
        statistikaBox.setAttribute('class', 'col-xl-2 col-md-5 col-11 box m-4 p-4 rounded');
        ikonica.setAttribute('class','fas fa-' + ikonice[i] + ' b-color');
        broj.setAttribute('class', 'brojac');
        broj.setAttribute('data-target', brojevi[i]);
        text.setAttribute('class', 'b-color');
        broj.append(ispisNule);
        text.append(ispisText);
        statistikaBox.append(ikonica);
        statistikaBox.append(broj);
        statistikaBox.append(text);
        statist.append(statistikaBox);
    }

    const izbroj = document.querySelectorAll('.brojac');
    const brzina = 200;

    izbroj.forEach(brojac => {
        const ciklus = () => {
            const target = +brojac.getAttribute('data-target');
            const broj = +brojac.innerText;

            const inkrement = target / brzina;

            if(broj<target){
                brojac.innerText = broj + inkrement;
                setTimeout(ciklus, 1)
            }
            else{
                broj.innerText = target;
            }
        }
        ciklus();
    })

}

// - Slajder utisaka -
function utisci(){

    const utisciBlok = document.querySelector('.text-slajd');

    let utisci = [
        '~ Nezaboravna avantura, prezanimljivo društvance. Tople preporuke za sve kojima predstavlja satisfakciju boravak u prirodi. ~',
        '~ Željela sam neku rasterećujuću aktivnost, prije svega zbog zdravlja, ali i radi razonode. Mislim da sam je konačno našla. ~',
        '~ Mislio sam da planinarenje iziskuje ogromnu fizičku spremnost, no zaista nije neizdrživo. Probajte! Nećete se pokajati. ~',
        '~ Od edukovanih i snalažljivih vodiča, preko idealne organizovanosti, do avanture za pamćenje. sve pohvale! ~'
    ];

    for (let i = 0; i < utisci.length; i++) {
        let text = document.createElement('span');
        let ispisTexta = document.createTextNode(utisci[i]);
        text.setAttribute('class', 'd-none');
        text.append(ispisTexta);
        utisciBlok.append(text);
    }

    const utisciBlokDjeca = utisciBlok.children;
    let duzina = utisciBlokDjeca.length;
    let index = 0;
    const ubacenTajmer = 3000,
          izbacenTajmer = 2800;    

    function textSlajder(){
        for(let i = 0; i<duzina; i++){
            utisciBlokDjeca[i].classList.remove("ubacen", "izbacen");
            utisciBlokDjeca[i].classList.add("d-none");
        }
        utisciBlokDjeca[index].classList.add("ubacen");
        utisciBlokDjeca[index].classList.remove("d-none");

        setTimeout(function(){
            utisciBlokDjeca[index].classList.add("izbacen");
        }, izbacenTajmer);

        setTimeout(function(){
            if(index == duzina-1){
                index = 0;
            }
            else{
                index++;
            }
            textSlajder();
        }, ubacenTajmer);
    }
    window.onload = textSlajder();
}