import {ToDo} from "./todo.js";
import {ToDoList} from "./todoList.js";

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
    

}

getELE("addItem").addEventListener("click", () => {
    addToDo()
})
