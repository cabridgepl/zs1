var b1 = document.getElementById('blok1');
var b2 = document.getElementById('blok2');
var b3 = document.getElementById('blok3');
var b4 = document.getElementById('blok4');
var imie = document.getElementById('imie');
var inner = document.getElementById('inner');
var content = document.getElementById('content');

b1.innerHTML = 'nowy tekst';
b1.innerHTML = 'Swarzędz';
b2.innerHTML = 'Poznań';

var miasto = prompt('Posaj ulubione miasto');
b3.innerHTML = miasto;

var stolica = 'Gniezno';
b4.innerHTML = stolica

imie.textContent = 'Janusz';

//róznica pomiędzy textontent a innerHTML

inner.innerHTML = '<h1><u>inner</u></h1>';
content.textContent = '<h1>content</h1>';















//docuemnt.getelementbyid('blok1).innerhtml = 'nowy tekst';
