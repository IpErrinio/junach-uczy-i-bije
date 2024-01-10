// Typy danych

"Dawid"
String // Tekst
123 Number // Numer
true || false Boolean // Prawda albo falsz
undefined // Bez wartości
null // Pusta wartość
NaN // Not a Number

firstName = "Dawid" // Deklaracja zmiennej (nazwa zmiennej = wartość zmiennej)

// Obiekt
{ //  {
    marka: "audi", //    nazwaWartości1: wartość,
    model: "A6", //    nazwaWartości2: wartość,
    rocznik: 2020 //    nazwaWartości3: wartość
} //  {

// Tablica
owoce = ["Banan", "Jabłko", "Pomarańcza"] // Tablica: ["wartość1", "wartość2", "wartość3", "wartość4"]
orange = owoce[2] // Trzecia wartość z tablicy owoce


// Przykład użycia tablic i obiektów
auto = {
    marka: "audi",
    model: "A6",
    rocznik: 2020
}

auto2 = {
    marka: "opel",
    model: "astra",
    rocznik: 2000
}

osoba = {
    imie: "marek",
    samochody: [auto, auto2]
}

osoba.imie // imie z osoby

// DEKLARACJA FUNKCJI
// function nazwaFunkcji(argumenty) {
//  *kod do wykonania*
// }
function symulatorSkoczni(zawodnik, odleglosc) {
    console.log('Zawodnik: ', zawodnik, 'skoczył ', odleglosc, 'm.')
}

// WYWOŁANIE FUNKCJI
// nazwaFunkcji(argumenty)
symulatorSkoczni("Adam Małysz", 102)

// Kolejność wykonywania
imie = "dawid"
nazwisko = "skiba"

function wypiszImie(_imie, _nazwisko) {
    nazwisko = "cwel"
    console.log(_imie, _nazwisko)
}

wypiszImie(imie, nazwisko)

wypiszImie(imie, nazwisko)

// IF, ELSE IF, ELSE

// || - OR
// && - AND

// Żeby if przeszedł warunek musi być prawdziwy
// Dla || choć jeden warunek
// Dla && wszystkie warunki

if (warunek1) {
    // Wykona się jeżeli warunek 1 jest prawdziwy
} else if (warunek2) {
    // Wykona się jeżeli warunek 1 jest nieprawdziwy a warunek 2 jest prawdziwy
} else {
    // Wykona się jeżeli żaden z warunków nie przejdzie
}

// Przykład
wiek = 14
jestZnajomyZaLada = false

if (wiek >= 18 || jestZnajomyZaLada) {
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
    console.log('piwo sprzedane')
} else {
    console.log('piwo nie sprzedane')
}

// Pętla
pracownicy = [
    { nazwisko: 'Kowalski', wiek: 50 },
    { nazwisko: 'Nowak', wiek: 20 },
    { nazwisko: 'Adamiak', wiek: 30 },
    { nazwisko: 'Duda', wiek: 62 },
]

// for (poczatkowa wartosc; warunek; inkrementacja/dekrementacja)
for (i = 0; i < pracownicy.length; i++) {
    console.log(pracownicy[i].nazwisko)
}


poteg2 = "qwer" //deklaracja
Math.pow(2, 4) // 2 do potęgi 4
Math.pow(125, 1 / 3) //pierwiastek szescienny z 125
liczba = 125
pierwiastek = 3

Math.round(Math.pow(liczba, 1 / pierwiastek))