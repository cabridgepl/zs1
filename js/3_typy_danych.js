var a = 10, b = "5a";
var wynik = a + b;
//alert(wynik);
//alert(a + b);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(wynik)); //string

var _zmienna1 = 10;

var zmiennoprzecinkowa = 2.5;
console.log(zmiennoprzecinkowa);
console.log(typeof(zmiennoprzecinkowa)); //number

//bool
//true lub false  prawda lub fałsz

var prawda = true;
var fałsz = false;
console.log(typeof(prawda)); //boolean
//string

var imie = 'janusz'
console.log(typeof(imie)); //string

//undefined
var nazwisko;
console.log(typeof(nazwisko));  //undefined

//object

var tablica = ['biały', 'zielony', 'czerwony'];
console.log(tablica)
console.log(typeof(tablica)); //object
//###################################

var liczba = prompt('Podaj liczbę');
//var liczba = prompt('Podaj liczbę')
var wiek1 = prompt('podaj wiek', 'np. 18');
console.log('Twój wiek: ' + wiek1 + ' lat');
console.log(typeof(wiek1)); //string
var wiek2 = prompt('Podaj wiek');
//rzutowanie typu danych na liczbę
var wiek3 = Number(prompt('Podaj wiek'));

//zamiana typu danych na całkowity
    /*wiek1 = parseInt(wiek1);
    wiek2 = parseInt(wiek2);*/

// zmiana typu danych na zmiennoprzecinkowe

wiek1 = parseFloat(wiek1);
wiek2 = parseFloat(wiek2);


var suma = wiek1 + wiek2;
var sredniWiek = suma / 3;
sredniWiek = sredniWiek.toFixed(2);
document.write(wiek1 + '+' + wiek2 + '+' + wiek3 + '=' + suma + "<br>");
document.write('Średni wiek wynosi: ' + sredniWiek + ' lat');

