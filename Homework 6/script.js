var array = ["Футбол", "баскетбол", "волейбол", "регби", "теннис"];
var block;

for(var i = 0; i < array.length; i++){
	block = document.createElement("div");
	block.className = "block";
	if (i == array.length - 1){
		block.innerText = " и " + array[i] + " .";
	} else if(i == array.length - 2){
		block.innerText = array[i] + " ";
	} else {
		block.innerText = array[i] + " , ";
	}
	
	document.getElementById("wrapper").appendChild(block);
}