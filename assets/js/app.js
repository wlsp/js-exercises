

// let i = 1;
// let lastName = "Johnson";
// let j = "2";
// let status = true;
// let hello = "hello";
// let helloWorld = "hello";

// console.log(typeof i)
// console.log(typeof lastName)
// console.log(typeof j)
// console.log(typeof status)
// console.log(typeof hello)
// console.log(typeof helloWorld)

// let vorName = "John"
// let pi = 3.14
// let notANumber = NaN
// let statusOne = false
// let iDo = [1, 2, 3, 4]
// let nameUndAlter = { name: 'John', age: 34 }
// let newDate = new Date()
// let fun = function () { }
// let zeto = null
// let gFeet = ""
// let adieren = 3 + 2 == 5
// let adieren2 = 3 + "3"

// console.log(typeof vorName)
// console.log(typeof pi)
// console.log(typeof notANumber)
// console.log(typeof statusOne)
// console.log(typeof iDo)
// console.log(typeof nameUndAlter)
// console.log(typeof newDate)
// console.log(typeof fun)
// console.log(typeof zeto)
// console.log(typeof gFeet)
// console.log(typeof adieren)
// console.log(typeof adieren2)

// // Deklariere die Variablen x = 20, y = 30.
// // Addiere x und y und gib das Ergebnis in der Konsole aus.
// // Subtrahiere y von x und zeige das Ergebnis in der Konsole.Dann subtrahiere x von y und gib das Ergebnis in der Konsole aus.
// // Multipliziere x und y und gib das Ergebnis der Konsole aus.
// // Teile x durch y und gib das Ergebnis mit der Konsole aus.
// // Deklariere eine weitere Variable z mit dem Wert 10. Multipliziere x und y.Teile dann das Ergebnis durch z.Speichere das Ergebnis in einer neuen Variablen namens resultOne.



// let x = 20
// let y = 30
// console.log(x + y)
// console.log(y - x)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)
// let z = 10
// console.log(x * y / z)
// var resultOne = (x * y / z)
// console.log(resultOne)

// // Deklariere zwei Variablen a mit dem Wert 15 und b mit dem Wert 9. Zeige den Rest an, wenn a durch b geteilt wird. Nutze Remainder(%).
// // Deklariere eine weitere Variable c mit dem Wert 20. Addiere a und b und multipliziere das Ergebnis mit c. Speichere das Ergebnis in der Variable resultTwo. Gib resultTwo in der Konsole aus.
// // Inkrementiere a. Gib das Ergebnis in der Konsole aus.
// // Dekrementiert b. Gib das Ergebnis in der Konsole aus.
// // Subtrahiere b von a und speichere das Ergebnis in einer neuen Variablen resultThree.
// // Gib den Rest aus wenn resultOne durch resultTwo geteilt wird in der Konsole aus. 
// // Nutze Remainder(%).


// let a = 15
// let b = 9
// console.log(a % b)
// let c = 20
// console.log(a + b + c)
// var resultTwo = (a + b + c)
// console.log(resultTwo)
// console.log(resultTwo++)
// console.log(resultTwo--)
// console.log(b - a)
// var resultThree = (b - a)
// console.log(resultThree)
// console.log(resultOne % resultTwo)


// // Übertrage folgende arithmetische Operatoren in deinen Code-Editor und schaue dir das Ergebnis an: 

// // Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt.
// let score = 5 + 5 * 10;
// console.log('Ergebnis: ' + score);

// // Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern.
// let scoreOne = (5 + 5) * 10;
// console.log('Ergebnis: ' + score);

// // Du kannst Werte auf Variablen addieren.
// let scoreTwo = 0;
// scoreTwo = scoreTwo + 10;
// console.log('Ergebnis: ' + score);

// // Hiervon gibt es eine verkürzte Version.
// scoreTwo += 10;
// console.log('Ergebnis: ' + score);

// // Inkrementierung und Dekrementierungen können wie folgt verwendet werden:
// let zahl = 53;
// zahl = zahl + 1;
// zahl += 1;

// // Verwende Inkrement-Operatoren
// zahl++;
// console.log('increment: ' + zahl);

// // Verwende Dekrement-Operatoren
// zahl--;
// console.log('dekrement: ' + zahl);

// // Übertrage folgende Rechenarten in deinen Code-Editor und schaue dir das Ergebnis an: 

// // Verwende Grundrechenarten
// // Addition
// let addition_operator = 1 + 1;
// console.log("addition: " + addition_operator);

// // Subtraktion
// let subtraktion_operator = 2 - 1;
// console.log("subtraktion: " + subtraktion_operator);

// // Multiplikation
// let multiplication_operator = 2 * 2;
// console.log("multiplication: " + multiplication_operator);

// // Division
// let division_operator = 4 / 2;
// console.log("division: " + division_operator);

// // Modul: zeigt an, was der Rest sein würde.
// let modulus_operator = 14 % 5;
// console.log("modulus: " + modulus_operator);

// // Gib zB Boolean(x) in der Konsole aus.

// let oneHundert = 100
// let pii = 3.14
// let subtrahiert = -15
// let hallo = "hello"
// let falsch = "false"
// let adiert = 1 + 7 + 3.14
// let zero = 0
// let minusZero = -0
// let nan = NaN
// let zeroAgain = null
// let richtigesFalsch = false

// console.log(Boolean(oneHundert))
// console.log(Boolean(pii))
// console.log(Boolean(subtrahiert))
// console.log(Boolean(hallo))
// console.log(Boolean(falsch))
// console.log(Boolean(adiert))
// console.log(Boolean(zero))
// console.log(Boolean(minusZero))
// console.log(Boolean(nan))
// console.log(Boolean(zeroAgain))
// console.log(Boolean(richtigesFalsch))



// Schreibe eine Funktion, die beim Anklicken des “Change me” Buttons den Home Button ändert.
// Der Code befindet sich im Kommentar.
// Nutze:
// onclick getElementById



var navHome = document.getElementById('navHome');
function changeHome() {
    navHome.classList.add('pinkNavHome');
}

const apagar = document.getElementById('navHome');
function apagarNav() {
    apagar.classList.remove('pinkNavHome')
}

let myText = "Hallo"
console.log(myText.length)
console.log(myText)

// Der erste Buchstabe ist 0
console.log(myText.indexOf('H')) //Index 0
console.log(myText.indexOf('lo')) //Index 3
console.log(myText.indexOf('Georg')) //Index -1 -->> nicht vorhaben oder nicht gefunden = -1

let myText2 = "Wenn hinter Fliegen Fliegen fliegen, fliegen Fliegen Fliegen nach!"
//zweiter Parameter (optional) ist dann der Startwert von dem ab wir suchen. 
console.log(myText2.indexOf('Fliegen'))
console.log(myText2.lastIndexOf('Fliegen', 22))

// Wie indexOf beginnt von hinten zu suchen
console.log(myText2.lastIndexOf('Fliegen'))
console.log(myText2.lastIndexOf('Fliegen', 51))
console.log(myText2.lastIndexOf('Spinnen'))

let position = myText2.lastIndexOf('Fliegen')
console.log('Extra Variable'.position)

//search nimmt keinen zweiten Parameter, liefert jedoch auch den index des gefunden Elements
console.log(myText2.search('Fliegen'))
console.log(myText2.search('Spinnen'))

//Text schneiden 
let myText3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vero."
//slice 

let lorem = myText3.slice(0.5)
console.log(lorem)
let lorem2 = myText3.slice(30)
console.log(lorem2)
let start = myText3.indexOf("ipsum")
let end = start + "ipsum".length
console.log(start, end)
let ipsum = myText3.slice(start, end)
console.log(ipsum)

let ipsum2 = myText3.slice(myText3.indexOf("ipsum"), myText3.indexOf("ipsum") + "ipsum".length)
console.log(ipsum2)

let negative = myText3.slice(-10, -7)
console.log(negative)

//substring wie slice, nimmt KEINE negativen Indexe
let newText = myText3.substring(7, 10)
console.log(newText)

let url = 'https://www.w3schools.com/css/css3_animations.asp'
let url2 = 'https://www.w3schools.com/html/html_forms.asp'
let url1 = url.substring(url.lastIndexOf('/') + 1)
console.log(url1)
let slicedUrl2 = url2.substring(url2.lastIndexOf('/') + 1)
console.log(slicedUrl2)

function multiply(a, b) {
    console.log(a * b);
    return a * b;
}

var firstName = "Wadson Lucas "
var lastName = "Santos Pereira"
console.log(firstName.length, lastName.length)
var fullName = firstName + lastName
console.log(fullName, fullName.length)



// Suche die Position des Zeichens “h” in der Variablen txt.
// Suche die Position des Zeichens “Earth” in der Variablen txt.
// Suche die Position des Zeichens “Moon” in der Variablen txt.
var txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."
console.log(txt.indexOf("h"))
console.log(txt.indexOf("Earth"))
console.log(txt.indexOf("Moon"))



// Verwende den Befehl search() um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.
// Suche die Position des Zeichens “;” in der Variablen txt.
// Suche die Position des Zeichens “green” in der Variablen txt.
// Suche die Position des Zeichens “blue” in der Variablen txt.
var txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
console.log(txt2.search(";"))
console.log(txt2.search("green"))
console.log(txt2.search("blue"))



// Verwende den Befehl slice() um das Ergebnis zu erhalten.
// Verwende die Methode "slice" um in deinem HTML folgendes angezeigt zu bekommen:
// Susi
// is
// is going to school
// school
// Susi is school
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(myVar+"<br>"), um das Ergebnis im Dokument auszugeben.
// var A = 'Susi is going to codingschool';
// console.log(A.slice(0, 4))
// console.log(A.slice(5, 7))
// console.log(A.slice(8, 14))
// console.log(A.slice(14, 17))
// console.log(A.slice(17, 29))



// Verwende den Befehl substring() um die gewünschten Zeichenketten zu erhalten.
// Zeige mit Hilfe der Methode "substring" diese Ausgabe in einem HTML-Dokument an:
// Susi
// is 
// school
// Susi is school
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(var1+"<br>"), um das Ergebnis anzuzeigen.
var text = 'Susi is back from codingschool';
let var1 = text.substring(0,4) 
let var2 = text.substring(5,7) 
let var3 = text.substring(24,30)
document.write(var1+"<br>" + var2+"<br>"+ var3+"<br>" + "<br>")
document.write(var1 + " " + var2 + " "+ var3 + "<br>")

// Verwende den Befehl substr() um die gewünschten Zeichenketten zu erhalten.
// Zeige mit Hilfe der Methode "substr" diese Ausgabe in einem HTML-Dokument an:
// Sam
// is 
// at school
// Sam works at school
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(var+"<br>"), um das Ergebnis anzuzeigen.
var text2 = "Sam is working at codingschool";
let var4 = text2.substr(0,3)
let var5 = text2.substr(3,4)
let var6 = text2.substr(14,3)
let var7 = text2.substr(24,30)
let var8 = (text2.substr(7,4)+ text2.substr(5,1))

// console.log(text2.substr(0,3)) = var 4
// console.log(text2.substr(3,4)) = var 5
// console.log(text2.substr(14,3))
// console.log(text2.substr(24,30))
// console.log(text2.substr(7,4)+ text2.substr(5,1))
document.write("<br>" + var4 + "<br>" + var5 + "<br>" + var6 + "<br>" + var7 + "<br>")
document.write("<br>" + var4 + " " + var8 + var6 + " " + var7 + "<br>")




// Verwende den Befehl toLowerCase(), toUpperCase() um die gewünschten Zeichenketten zu erhalten.
// Erzeuge mit den Methoden "toLowerCase-toUpperCase" diese Ausgabe in einem HTML-Dokument. Nutze alle Methoden die du bereits gelernt hast.
// SAM IS GOING TO SCHOOL
// sam is going at school 
// SAM is going to SCHOOL
// sam IS GOING TO school
// Sam Is Going To School
// Speichere jedes Ergebnis in einer Variablen und verwende document.write(var+"<br>"), um das Ergebnis anzuzeigen.
var text3 = "Sam is going to codingschool"
let var9 = text3.substr(0,15).toUpperCase() + " " + text3.substr(22,30).toUpperCase()
let var10 = text3.substr(0,15).toLowerCase() + " " + text3.substr(22,30).toLowerCase()
let var11 = text3.substr(0,3).toUpperCase() + text3.substr(3,13) + text3.substr(22,30).toUpperCase()
let var12 = text3.substr(0,4).toLowerCase() + text3.substr(4,12).toUpperCase() + text3.substr(22,30)
let var13 = text3.substr(0,4 + 11,15).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) + " " + text3.substr(22,30).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
console.log(var13)
document.write("<br>"+ var9 + "<br>" + var10 + "<br>" + var11 + "<br>" + var12 + "<br>" + var13)







