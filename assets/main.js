let f1 = document.querySelectorAll(".fruit");
let v1 = document.querySelectorAll(".vegetables");

f1.forEach(are => {
    are.addEventListener
        ("dragstart", function (e) {
            e.dataTransfer.setData("FruitId", this.id);
        })
})
v1.forEach(are => {
    are.addEventListener
        ("dragstart", function (e) {
            e.dataTransfer.setData("VegetablesId", this.id);
        })
})


document.querySelectorAll(".area1").forEach(area => {
    area.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})
document.querySelectorAll(".area1").forEach(area => {
    area.addEventListener("drop", function (e) {
        let data = e.dataTransfer.getData("FruitId");
        this.appendChild(document.getElementById(data));
    })
})

document.querySelectorAll(".area2").forEach(area => {
    area.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})
document.querySelectorAll(".area2").forEach(area => {
    area.addEventListener("drop", function (e) {
        let data = e.dataTransfer.getData("VegetablesId");
        this.appendChild(document.getElementById(data));
    })
})

document.querySelectorAll(".area").forEach(area => {
    area.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})
document.querySelectorAll(".area").forEach(area => {
    area.addEventListener("drop", function (e) {
        let data = e.dataTransfer.getData("FruitId");
        this.appendChild(document.getElementById(data));
    })
})

document.querySelectorAll(".area").forEach(area => {
    area.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
})
document.querySelectorAll(".area").forEach(area => {
    area.addEventListener("drop", function (e) {
        let data = e.dataTransfer.getData("VegetablesId");
        this.appendChild(document.getElementById(data));
    })
})