let dataGlasses = [
    {
        id: "G1",
        src: "./img/thukinh/g1.jpg",
        virtualImg: "./img/thukinh/v1.png",
        brand: "Armani Exchange",
        name: "Bamboo wood",
        color: "Brown",
        price: 150,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? "
    },
    {
        id: "G2",
        src: "./img/thukinh/g2.jpg",
        virtualImg: "./img/thukinh/v2.png",
        brand: "Arnette",
        name: "American flag",
        color: "American flag",
        price: 150,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."
    },
    {
        id: "G3",
        src: "./img/thukinh/g3.jpg",
        virtualImg: "./img/thukinh/v3.png",
        brand: "Burberry",
        name: "Belt of Hippolyte",
        color: "Blue",
        price: 100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        id: "G4",
        src: "./img/thukinh/g4.jpg",
        virtualImg: "./img/thukinh/v4.png",
        brand: "Coarch",
        name: "Cretan Bull",
        color: "Red",
        price: 100,
        description: "In assumenda earum eaque doloremque, tempore distinctio."
    },
    {
        id: "G5",
        src: "./img/thukinh/g5.jpg",
        virtualImg: "./img/thukinh/v5.png",
        brand: "D&G",
        name: "JOYRIDE",
        color: "Gold",
        price: 180,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"
    },
    {
        id: "G6",
        src: "./img/thukinh/g6.jpg",
        virtualImg: "./img/thukinh/v6.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Blue, White",
        price: 120,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        id: "G7",
        src: "./img/thukinh/g7.jpg",
        virtualImg: "./img/thukinh/v7.png",
        brand: "Ralph",
        name: "TORTOISE",
        color: "Black, Yellow",
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."
    },
    {
        id: "G8",
        src: "./img/thukinh/g8.jpg",
        virtualImg: "./img/thukinh/v8.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Red, Black",
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."
    },
    {
        id: "G9",
        src: "./img/thukinh/g9.jpg",
        virtualImg: "./img/thukinh/v9.png",
        brand: "Coarch",
        name: "MIDNIGHT VIXEN REMIX",
        color: "Blue, Black",
        price: 120,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."
    }
];

import {Glasses} from "./glasses.js";
import {GlassesList} from "./glassesList.js";

let glassesList = new GlassesList()

const getELE = (id) => {
    return document.getElementById(id)
}


// hien thi danh sach kinh
// khai bao ham
const showGlassesList = () => {
    let divGlassesList = getELE("vglassesList")

    // tao doi tuong kinh va them kinh vao danh sach kinh
    // duyet mang data
    dataGlasses.map((item, index) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description)
        glassesList.addGlasses(gl)
    })
    // console.log(glassesList.glist)
    divGlassesList.innerHTML = glassesList.renderGlasses()
}
// goi ham
showGlassesList()

const tryOnGlasses = (e) => {
    // console.log(e)
    let gID = e.target.getAttribute("data-id")
    let gObject = {}
    // value la 1 doi tuong kinh trong danh sach kinh
    for (let value of glassesList.glist) {
        if (value.id === gID) {
            gObject = value;
        }
    }
    // console.log(gObject)
    showInfo(gObject)
}

// chuyển thành hàm của window để có thể gọi ở bất kỳ chỗ nào cũng đc hết
// sau window. là tên của hàm mà mình tự đặt cho window,
window.tryOnGlasses = tryOnGlasses;


const showInfo = (gObject) => {
    let divAvatar = getELE("avatar");
    let divInfo = getELE("glassesInfo")

    divAvatar.innerHTML = `
    <img id="glasses" src="${gObject.virtualImg}">
    `
    let status = ""
    status = gObject.status ? "Stocking" : "Sold Out"
    divInfo.innerHTML = `
        <h5>${gObject.name} - ${gObject.brand} - (${gObject.color})</h5>
        <p class="card-text">
            <span class="btn btn-danger btn-sm mr-2">$${gObject.price}</span>
            <span class="text-success">${status}</span>
        </p>
        <p class="card-text">
            ${gObject.desc}
        </p>
    `

    divInfo.style.display = "block"
}


const removeGlasses = (isDisplay) => {
    let glasses = getELE("glasses")
    if (!glasses) return;
    // if (isDisplay) {
    //     glasses.style.opacity = 0.9
    // } else {
    //     glasses.style.opacity = 0;
    // }

    isDisplay ? glasses.style.opacity = 0.9 : glasses.style.opacity = 0;
}

window.removeGlasses = removeGlasses;
