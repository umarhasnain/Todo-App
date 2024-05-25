let btn = document.getElementById("btn");


btn.addEventListener("click", function() {
    let todo_input = document.getElementById("todo_input")
    let input_list = document.getElementById("input_list");



    input_list.innerHTML += `<li>${todo_input.value} </li>`



    console.log(todo_input);

    todo_input.value = "";





})