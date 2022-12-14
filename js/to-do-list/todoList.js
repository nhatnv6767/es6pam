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
                        <button class="remove" data-index="${index}" data-status="${item.status}" onclick="deleteToDo(event)">
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

    sortToDoList(isDES) {
        this.tdList.sort((todo, nextToDo) => {
            const textA = todo.textTodo.toLowerCase();
            const textB = nextToDo.textTodo.toLowerCase();
            // so sanh theo dang asc, so sanh ca chu tieng viet co dau
            return textB.localeCompare(textA)
        })
        if (isDES) {
            this.tdList.reverse()
        }
    }

}
