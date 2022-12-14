import {ToDo} from "./todo.js";
import {ToDoList} from "./todoList.js";

let todoList = new ToDoList();
const getELE = id => {
    return document.getElementById(id)
}

// ham them todo
const addToDo = () => {
    let txtToDo = getELE("newTask").value;
    let ulToDo = getELE("todo")

    if (!txtToDo || txtToDo === "") {
        return;
    }
    let td = new ToDo(txtToDo, "todo");
    todoList.addToDo(td)
    showToDoList(ulToDo)
    getELE("newTask").value = ""
}

getELE("addItem").addEventListener("click", () => {
    addToDo()
})


// ham hien thi to-do
const showToDoList = (ulToDo) => {
    ulToDo.innerHTML = todoList.renderToDo()
}


// delete to-do
const deleteToDo = (e) => {
    let tdIndex = event.target.getAttribute("data-index");
    let ulToDo = getELE("todo");
    todoList.renderToDo(tdIndex)
    showToDoList(ulToDo)

}
