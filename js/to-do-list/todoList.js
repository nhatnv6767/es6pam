export class ToDoList {
    constructor() {
        this.tdList = [];
    }

    addToDo(todo) {
        this.tdList.push(todo)
    }

    removeToDo(index) {
        this.tdList.splice(index, 1)
    }

    renderToDo() {
        let content = ""
        // duyet mang tu phai qua trai, de khi them 1 to-do moi ta luon hung' dc cai dau tien
        content = this.tdList.reduceRight((tdContent, item, index) => {
            tdContent += `
                <li>
                    <span>${item.textTodo}</span>
                    <div class="buttons">
                        <button class="remove" data-index="${index}" onclick="deleteToDo(event)">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete" data-index="${index}" data-status="${item.status}" onclick="completeToDo(event)">
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `
            return tdContent
        }, "")
        return content
    }

}
