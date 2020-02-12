var user;
var pass;
var btn = document.getElementById("btn");
error = false;

function failpass() {
	document.getElementById("password").style.background = "#680E0E";
	document.getElementById("password").value = "";
}
function successpass() {
	document.getElementById("password").style.background = "#406841";
}

btn.addEventListener('click', function(){
	user = document.getElementById("user").value;
	pass = document.getElementById("password").value;
	
	if(pass.length < 6 || pass.length > 16){
		error = true;
	} else {
		error = false;
	}
	
	pass = pass.split("");

	for(var i = 0; i < pass.length; i++){
		if(pass[i] == Number()){
			error = true;
		} else {
			error = false;
		}
	}
	if(error){
		failpass();
	} else {
		successpass();
	}
});

