import {ToDo} from "./todo.js";
import {ToDoList} from "./todoList.js";

let todoList = new ToDoList();
let completeList = new ToDoList();
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
const showCompleteList = (ulComplete) => {
    ulComplete.innerHTML = completeList.renderToDo()
}


// delete to-do
const deleteToDo = (e) => {
    let tdIndex = e.target.getAttribute("data-index");
    let ulToDo = getELE("todo");
    todoList.removeToDo(tdIndex)
    showToDoList(ulToDo)

}

window.deleteToDo = deleteToDo;

const completeToDo = (e) => {
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getELE("todo")
    let ulCompleted = getELE("completed")

    if (status === "todo") {
        // slice: start <= index < end
        let completedItem = todoList.tdList.slice(tdIndex, tdIndex + 1);
        let objToDo = new ToDo(completedItem[0].textTodo, "completed");
        moveToDo(todoList, completeList, objToDo, tdIndex)
        showToDoList(ulToDo)
        showCompleteList(ulCompleted)
    }
}

window.completeToDo = completeToDo;

const moveToDo = (depart, arrival, obj, tdIndex) => {
    // remove to do from depart
    depart.removeToDo(tdIndex)

    // add to-do to arrival
    arrival.addToDo(obj)
}
