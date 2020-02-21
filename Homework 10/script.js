var user = document.getElementById("user");
var pass = document.getElementById("password");
var btn = document.getElementById("btn");

function failpass() {
	document.getElementById("password").style.border = "1px solid #680E0E";
}
function successpass() {
	document.getElementById("password").style.border = "1px solid #406841";
}

function faillog() {
	document.getElementById("user").style.border = "1px solid #680E0E";
}
function successlog() {
	document.getElementById("user").style.border = "1px solid #406841";
}
user.addEventListener('input', function(){	
	var userval = document.getElementById("user").value;	
	userval = userval.split("");

	if(/[A-Z]/.test(userval) || userval == ""){
		faillog();
	}
	else{
		successlog();
	}	
});


pass.addEventListener('input', function(){
	var passval = document.getElementById("password").value;
	passval = passval.split("");

	if(passval.length < 6 || passval.length > 16){
		failpass();
		console.log("failpass1");
	} 
	else {
		successpass();
		console.log("successpass1");
			if(/\d/g.test(passval) || passval == ""){
				failpass();
				console.log("failpass2");
			} else {
				successpass();
				console.log("successpass2");
			}
	}
});