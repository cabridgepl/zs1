var imie, nazwisko = "Nowak";
imie = "Janusz"
nazwisko = "Nowak";
document.write(nazwisko);
//+ konkatenacja
document.write("<br>Twoje nazwisko to: " + nazwisko);
document.write("<br>Twoje imie to: " + imie);

var wiek = 15;
if(wiek<=15)
    document.write("<br>jesteś dzieckiem")
if(wiek >=65)
    document.write("<br>Masz dużo lat");
else if(wiek >=18)
    document.write("<br>Jestes pełnoletni");
else
    document.write("<br>nie jesteś pełnoletni");

//################################################
var x, y;
x = 10;
y = 5;
var suma = x + y;
alert("suma wynosi:" +  suma);
var roznica = x - y;
var dzielenie = x + y
dzielenie = x / y;
mnozenie = x * y;
modulo = x % y;
console.log(modulo);
