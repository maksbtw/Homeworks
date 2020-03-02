var input = document.getElementById('input');
var btn = document.getElementById('btn');
var ul = document.getElementById('todos');
var li;
var todos = [];

function displaytodos(){
	var display = "";
	todos.forEach(function(item, i){
		if(item.todo != ""){
			display += `
		<li>
			<input type="checkbox" id="el_${i}">
			<label for="el_${i}">${item.todo} </label>
		</li>
		`;
		ul.innerHTML = display;
		} else {

		}	
	});	
}

btn.addEventListener('click', function () {
	todo = input.value;
	
	var newTodo = {
		todo: todo,
		checked: false
	};

	todos.push(newTodo);

	console.log(todos);

	displaytodos();

	input.value = "";
});