let btn = document.getElementById("btn");
let todo_input = document.getElementById("todo_input");
let input_list = document.getElementById("input_list");
var arr = [];

function checkEnterKey(event) {
    if (event.key === "Enter") {
        addTodo();
    }
}

var todoList = localStorage.getItem("input_list");
if (todoList) {
    arr = JSON.parse(todoList);
}

function loadAllTodo() {
    input_list.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var li = `
    <li> ${arr[i]} 
    <button  class="edit_btn" onclick="deleteOne('${i}')">Del</button>
    <button  class="edit_btn" onclick="editTodo('${arr[i]}','${i}')">Edit</button> 
    </li>
    `;
        input_list.innerHTML += li;
    }
}
loadAllTodo();


function addTodo() {

    let todo_input = document.getElementById("todo_input");
    if (todo_input.value.trim() !== "") {
        var li = `
      <li> ${todo_input.value} 
      <button class="edit_btn" onclick="editTodo('${todo_input.value}','${arr.length}')">Edit</button> 
      <button class="edit_btn" onclick="deleteOne('${arr.length}')">Del</button>
      </li>
      `;
        arr.push(todo_input.value);
        localStorage.setItem("input_list", JSON.stringify(arr));
        input_list.innerHTML += li;
        todo_input.value = "";

    }

};

function deleteAll() {
    input_list.innerHTML = "";
    localStorage.removeItem("input_list");
}

function deleteOne(i) {
    console.log(i);
    arr.splice(i, 1);
    localStorage.setItem("input_list", JSON.stringify(arr));
    event.target.parentNode.remove();
    loadAllTodo();
}

function editTodo(a, i) {
    var oldValue = prompt("Enter updated value", a);
    if (oldValue) {
        arr.splice(i, 1, oldValue);
        localStorage.setItem("input_list", JSON.stringify(arr));
        event.target.parentNode.firstChild.nodeValue = oldValue;
    }
}