import {ToDo} from "./todo.js";
import {ToDoList} from "./todoList.js";

const getELE = id => {
    return document.getElementById(id)
}

// ham them todo
const addToDo = () => {
    let txtToDo = getELE("newTask").value;
    let ulToDo = getELE("todo")

    let td = new ToDo(txtToDo, "todo");
    console.log(td)
}

getELE("addItem").addEventListener("click", () => {
    addToDo()
})
