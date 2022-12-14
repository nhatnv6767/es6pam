export class ToDoList {
    constructor() {
        this.tdList = [];
    }

    addToDo(todo) {
        this.tdList.push(todo)
    }

    renderToDo() {
        let content = ""
        // duyet mang tu phai qua trai, de khi them 1 todo moi ta luon hung' dc cai dau tien
        content = this.tdList.reduceRight((tdContent, item, index) => {
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
            return tdContent
        }, "")
        return content
    }

}
