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
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getELE("todo");
    let ulCompleted = getELE("completed");
    if (status === "todo") {
        todoList.removeToDo(tdIndex)
        showToDoList(ulToDo)
    } else if (status === "completed") {
        completeList.removeToDo(tdIndex)
        showCompleteList(ulCompleted)
    } else {
        alert("Cannot delete todo!")
    }

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
    } else if (status === "completed") {
        let undoItem = completeList.tdList.slice(tdIndex, tdIndex + 1);
        let objToDo = new ToDo(undoItem[0].textTodo, "todo");
        moveToDo(completeList, todoList, objToDo, tdIndex)
        showToDoList(ulToDo)
        showCompleteList(ulCompleted)
    } else {
        alert("Cannot move todo!")
    }
}

window.completeToDo = completeToDo;

const moveToDo = (depart, arrival, obj, tdIndex) => {
    // remove to do from depart
    depart.removeToDo(tdIndex)

    // add to-do to arrival
    arrival.addToDo(obj)
}

// xep tang dan
const sortASC = () => {
    let ulToDo = getELE("todo");
    todoList.sortToDoList(false);
    showToDoList(ulToDo)
}

window.sortASC = sortASC;


const sortDES = () => {
    let ulToDo = getELE("todo");
    todoList.sortToDoList(true);
    showToDoList(ulToDo)
}

window.sortDES = sortDES;


