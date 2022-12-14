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
    console.log(todoList.tdList)

}

getELE("addItem").addEventListener("click", () => {
    addToDo()
})
