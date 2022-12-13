export class GlassesList {
    constructor() {
        this.glist = [];
    }

    addGlasses(glasses) {
        this.glist.push(glasses);
    }

    renderGlasses() {
        // cac the html chua noi dung cua cac doi tuong kinh
        let content = ""
        // dung reduce de co lenh return, nem' gia tri ra ben ngoai
        // glContent: giá trị return ra khỏi vòng lặp sau khi đã hoàn thành
        content = this.glist.reduce((glContent, item, index) => {
            glContent += `
            <div class="col-4">
                <img class="img-fluid" onclick="tryOnGlasses(event)" data-id="${item.id}" src="${item.src}" alt="Glasses">
            </div>
            `
            return glContent;
        }, "")// giá trị ban đầu của glContent
        return content;
    }

}
