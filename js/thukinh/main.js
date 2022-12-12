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

const getELE = (id) => {
    return document.getElementById(id)
}


// hien thi danh sach kinh
// khai bao ham
const showGlassesList = () => {
    let divGlassesList = getELE("vglassesList")

    // tao doi tuong kinh va them kinh vao danh sach kinh
    // duyet mang data
    dataGlasses.map(function (item, index) {

    })
}
