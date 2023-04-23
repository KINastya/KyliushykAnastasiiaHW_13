const promt = Number(prompt("Будь ласка ведіть довжину массиву"));
if(promt <= 0 || promt === null) {
    console.log("Довжина массиву не може дорівнювати або бути нулем")
}
else {
    let characters = [];
    for (let index = 0; index < promt; index++) {
        let newElement = prompt("Введіть елементи массиву");
        characters.push(newElement);
    }
    document.getElementById("task_01").innerHTML = characters;

    characters.sort((a, b) => {
        return a - b;
    });
    document.getElementById("task_02").innerHTML = characters;

    characters.splice(1, 3);
    document.getElementById("task_03").innerHTML = characters;
}