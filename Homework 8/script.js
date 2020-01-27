var a;
var b;
var ans = document.getElementById("answer");
var result = null;

function plus(a, b) {
	return a + b;
}
function minus(a, b) {
	return a - b;
}
function umnozhenie(a, b) {
	return a * b;
}
function delenie(a, b) {
	return a / b;
}

for(var i = 0; i < 4; i++){
document.getElementsByClassName('action')[i].addEventListener('click', function(e) {
	a = parseInt(document.getElementById("input1").value);
	b = parseInt(document.getElementById("input2").value);
		if(e.target.textContent === "+"){
			ans.innerHTML = plus(a, b);
		} else if(e.target.textContent === "-"){
			ans.innerHTML = minus(a, b);
		} else if(e.target.textContent === "*"){
			ans.innerHTML = umnozhenie(a, b);
		} else if(e.target.textContent === "/"){
			ans.innerHTML = delenie(a, b);
		} else {
			ans.innerHTML = "Проверте правильность введённых данных";
		}
	document.getElementById("input1").value = "";
	document.getElementById("input2").value = "";
});
}