export class ToDoList {
    constructor() {
        this.tdList = [];
    }

    addToDo(todo) {
        this.tdList.push(todo)
    }

    renderToDo() {
        let content = ""
        this.tdList.reduceRight((tdContent, item, index) => {

        })
    }

}
