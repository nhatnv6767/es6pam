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
            tdContent += `
                <li>
                    <span>${item.textTodo}</span>
                    <div class="buttons">
                        <button class="remove">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete">
                            <i class="far fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `
        }, "")
    }

}
