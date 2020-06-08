//Rossi Davide 4A - A.S 2019-2020

const quiz = document.getElementById("quiz");
quiz.style.display = "none";

const risposte = document.getElementById("risposte");
risposte.style.display = "none";


const avvisoNegativo = document.querySelector("#messaggio1");
avvisoNegativo.style.display = "none";
const avvisoMedio = document.querySelector("#messaggio2");
avvisoMedio.style.display = "none";
const avvisoPositivo = document.querySelector("#messaggio3");
avvisoPositivo.style.display = "none";

const quiz2 = document.getElementById("quiz2");
quiz2.style.display = "none";


const quiz2nav = document.getElementById("quiz2nav");
const quiz3nav = document.getElementById("quiz3nav");

const login = document.getElementById("login");
const nomeGiocatore = document.getElementById("nome");
const gioca = document.querySelector("#gioca");
const errore = document.querySelector("#errore");
errore.style.color = "white";
const email = document.querySelector("#email");
const eta = document.getElementById("eta");
const privacy = document.getElementById("privacy");
const riprova = document.getElementById("riprova");
const riprova1 = document.getElementById("riprova1");



//0 SBAGLIATA - 1 GIUSTA
var risposta1 = 0;
var risposta2 = 0;
var risposta3 = 0;
var risposta4 = 0;
var risposta5 = 0;
var risposta6 = 0;


var nquiz = 1;
var tot = 0;

var timerID;

quiz1nav.addEventListener ("click", (event) => {
	event.preventDefault();
	
	localStorage.nquiz = 1;
	window.location.reload();
	nquiz = 1;
	
} )

quiz2nav.addEventListener ("click", (event) => {
	event.preventDefault();

	
	localStorage.nquiz = 2;
	window.location.reload();
	nquiz = 2;
	
} )

if (localStorage.nquiz == null) {
	gioca.setAttribute("disabled", true);
}

document.addEventListener('DOMContentLoaded', () => {

  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});



document.getElementById("titolo").innerHTML += " " + localStorage.nquiz;



document.getElementById("privacy2").addEventListener ("click", (event) => {
	event.preventDefault();

		alert("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel neque in nulla maximus varius quis ac risus. Suspendisse accumsan sed enim vel accumsan. Suspendisse suscipit iaculis mauris vitae accumsan. Aliquam vel metus in ligula sodales interdum. Praesent ut turpis sed ex porttitor semper eget in ipsum. Curabitur a viverra risus. Nam interdum vitae magna quis fringilla. Nam efficitur est vel massa dignissim iaculis. Nam lobortis elit a eros dignissim, a viverra nulla facilisis. Praesent quis vulputate quam. Suspendisse scelerisque congue nisl, id euismod ex mattis vitae. Mauris blandit egestas venenatis. Donec nec mi odio. Donec ultricies molestie purus vel eleifend. Integer a gravida neque. Proin odio sapien, rhoncus in sagittis id, varius ut odio. Quisque condimentum, turpis at pharetra tristique, libero ex finibus sem, sed luctus diam orci in ante.");
	
} )

gioca.addEventListener ("click", (event) => {
	event.preventDefault();

	if (validazione()) {

		if (localStorage.nquiz == 1) {
			quiz.style.display = "block";

		login.style.display = "none";
		document.getElementById("titolo").innerHTML += " " + nomeGiocatore.value;
		timerID = setTimeout(controlla1 , 60000);
		const bar = document.getElementById("bar");
		let t = setInterval( () => bar.value-- , 1000);

		}

		if (localStorage.nquiz == 2) {
			quiz2.style.display = "block";
			riprova.style.display = "none";

		login.style.display = "none";
		document.getElementById("titolo").innerHTML += " " + nomeGiocatore.value;
		timerID = setTimeout(controlla22 , 60000);
		const bar2 = document.getElementById("bar2");
		let t = setInterval( () => bar2.value-- , 1000);
		}

		
	}	
} )

function validazione () {
	if (nomeGiocatore.value == "") {
			errore.innerHTML = "Devi inserire un nome!";
			nomeGiocatore.style.background = "pink";
			nomeGiocatore.focus();
			return false;
	} 
	
	if (email.value == "") {
			errore.innerHTML = "Devi inserire un'e-mail!";
			email.style.background = "pink";
			email.focus();
			return false;
		} else {
			let atpos = email.value.indexOf("@");
			let dotpos = email.value.lastIndexOf(".");
			if ((atpos < 1) || (dotpos - atpos < 2)) {
			errore.innerHTML = "Devi inserire un'email VALIDA";
			email.style.background = "pink";
			email.focus();
			return false;
		} 
	}

	if (eta.value == "") {
			errore.innerHTML = "Devi inserire l'età!";
			eta.style.background = "pink";
			eta.focus();
			return false;
	} else if (isNaN(eta.value) || (eta.value<18) ) {
			errore.innerHTML = "Per eseguire il Quiz devi avere un età maggiore o uguale a 18 anni";
			eta.style.background = "pink";
			eta.focus();
			return false;
	}

	if (!privacy.checked) {
		errore.innerHTML = "Devi accettare le condizioni di privacy";
		return false;
	}
	return true;
}

nomeGiocatore.addEventListener ('input', () => nomeGiocatore.style.background = "white");
email.addEventListener ('input', () => email.style.background = "white");
eta.addEventListener ('input', () => eta.style.background = "white");


/**************QUIZ **************/
const errore2 = document.querySelector("#errore2");

const uno = document.querySelector("#uno");
const due = document.getElementById("due");
const tre1 = document.getElementById("tre1");
const tre2 = document.getElementById("tre2");
const tre3 = document.getElementById("tre3");
const quattro = document.getElementById("quattro");
const cinque = document.getElementById("cinque");
const sei = document.getElementById("sei");
const controlla = document.querySelector("#controlla");


const uno2 = document.querySelector("#uno2");
const due2= document.querySelector("#due2");
const tre22 = document.querySelector("#tre22");
const quattro2 = document.querySelector("#quattro2");
const cinque2 = document.querySelector("#cinque2");
const sei2 = document.querySelector("#sei2");

controlla.addEventListener ("click", (event) => {
	event.preventDefault();

	controlla1();


	
})
function controlla1(){
		resultx(conteggio());
	quiz.style.display = "none";

	risposte.style.display = "block";
	rispostecolore();

}

controlla2.addEventListener ("click", (event) => {
	event.preventDefault();
	controlla22();

	
})

function controlla22(){


	clearTimeout(timerID);
	bar2.style.display = "none";
	resultx(conteggio2());
	rispostecolore2();
	uno2.readOnly = true;
	due2.readOnly = true;
	tre22.readOnly = true;
	quattro2.readOnly = true;
	cinque2.readOnly = true;
	sei2.readOnly = true;

	riprova.style.display = "block";
	controlla2.style.display = "none";

	document.getElementById('messaggio_spostato').appendChild(avvisoNegativo);
	document.getElementById('messaggio_spostato').appendChild(avvisoMedio);
	document.getElementById('messaggio_spostato').appendChild(avvisoPositivo);

}



riprova.addEventListener ("click", (event) => {
	event.preventDefault();

	
	avvisoPositivo.style.display = "none";
	avvisoMedio.style.display = "none";
	avvisoNegativo.style.display = "none";
	risposte.style.display = "none";
	quiz2.style.display = "none";
	login.style.display = "block";
	location.reload();
} )

riprova1.addEventListener ("click", (event) => {
	event.preventDefault();

	
	avvisoPositivo.style.display = "none";
	avvisoMedio.style.display = "none";
	avvisoNegativo.style.display = "none";
	risposte.style.display = "none";
	quiz2.style.display = "none";
	login.style.display = "block";
	location.reload();
} )


function conteggio () {
	let ris = 0;
	if (uno.value.toUpperCase() == "NEW YORK TIMES" ) {
		ris++;
		risposta1 = 1;
	}


	if (due.value.toUpperCase() === "ITALIA" ) {
		ris++;
		risposta2 = 1;
	}


	if(tre1.checked) {
						ris++;
						risposta3 = 1;
					 }


	if (quattro.value === "provenza") {
		ris++;
		risposta4 = 1;
	}

	if (cinque.value === "forzagravita") {
		ris ++;
		risposta5 = 1;
	}

	if(cinque.checked) {
						ris++;
						risposta6 = 1;
					 }
	if (sei.checked) {
		ris++;
		risposta6 = 1;
	}


	return ris;
}

function conteggio2 () {
	let ris = 0;

	if (uno2.value.toUpperCase() == "QUIRINALISTA" ) {
		ris++;
		risposta1 = 1;
		
	}


	if (due2.value.toUpperCase() === "MARCONI") {
		ris++;
		risposta2 = 1;
		
	}

	if (tre22.value.toUpperCase() == "GINESTRA" ) {
		ris++;
		risposta3 = 1;
		
	}


	if (quattro2.value.toUpperCase() === "VIALLI" ) {
		ris++;
		risposta4 = 1;
		
	}

	if (cinque2.value.toUpperCase() == "BIANCANEVE" ) {
		ris++;
		risposta5 = 1;
	}


	if (sei2.value.toUpperCase() === "CAMILLO" ) {
		ris++;
		risposta6 = 1;
		
	}

	

	return ris;
}





function resultx (cont) {
	let tot = cont;



	if (tot < 1) {
		avvisoNegativo.style.display = "block";
		const msg = document.getElementById("msg1");
		const msgB = document.querySelector("#msgB1");
		msg.innerHTML = "Risultato del quiz"
		msgB.innerHTML = "Niente da fare, hai fatto " + tot + " punti";
	}

	if (tot >= 1 && tot < 4) {
		avvisoMedio.style.display = "block";
		const msg2 = document.getElementById("msg2");
		const msgB2 = document.querySelector("#msgB2");
		msg2.innerHTML = "Risultato del quiz"
		msgB2.innerHTML = "Potevi fare meglio, sei riuscito a fare " + tot + " punti";
	}

	if (tot >= 5) {
		avvisoPositivo.style.display = "block";
		const msg3 = document.getElementById("msg3");
		const msgB3 = document.querySelector("#msgB3");
		msg3.innerHTML = "Risultato del quiz"
		msgB3.innerHTML = "Niente male! Hai totalizzato " + tot + " punti";
	}
}


function rispostecolore () {

	if(risposta1 == 1){
	document.getElementById("ris1").style.background="green";

	}
	else{
		document.getElementById("ris1").style.background="red";


	}

		if(risposta2 ==  1){
	document.getElementById("ris2").style.background="green";

	}
	else{
		document.getElementById("ris2").style.background="red";
	}

		if(risposta3 ==  1){
	document.getElementById("ris3").style.background="green";
	}
	else{
		document.getElementById("ris3").style.background="red";
	}

		if(risposta4 ==  1){
	document.getElementById("ris4").style.background="green";
	}
	else{
		document.getElementById("ris4").style.background="red";
	}

	if(risposta5 ==  1){
	document.getElementById("ris5").style.background="green";
	}
	else{
		document.getElementById("ris5").style.background="red";
	}

	if(risposta6 ==  1){
	document.getElementById("ris6").style.background="green";
	}
	else{
		document.getElementById("ris6").style.background="red";
	}

}

function rispostecolore2 () {

	if(risposta1 == 1){
	document.getElementById("uno2").style.background="green";

	}
	else{
		document.getElementById("uno2").style.background="red";


	}

		if(risposta2 ==  1){
	document.getElementById("due2").style.background="green";

	}
	else{
		document.getElementById("due2").style.background="red";
	}

		if(risposta3 ==  1){
	document.getElementById("tre22").style.background="green";
	}
	else{
		document.getElementById("tre22").style.background="red";
	}

		if(risposta4 ==  1){
	document.getElementById("quattro2").style.background="green";
	}
	else{
		document.getElementById("quattro2").style.background="red";
	}

	if(risposta5 ==  1){
	document.getElementById("cinque2").style.background="green";
	}
	else{
		document.getElementById("cinque2").style.background="red";
	}

	if(risposta6 ==  1){
	document.getElementById("sei2").style.background="green";
	}
	else{
		document.getElementById("sei2").style.background="red";
	}

}

