const addBox = document.querySelector('#add-a-box');
const boxContainer = document.querySelector('#box-container');


addBox.addEventListener('click', () =>{
    let newBox = document.createElement("div");
    newBox.classList.add('box');
    boxContainer.append(newBox);
})


/*const allBoxes = document.querySelectorAll('#box-container .box');
allBoxes.forEach((box) =>{
    box.addEventListener("click", (event) => {
        event.target.classList.toggle("green");
    });
}); */

boxContainer.addEventListener('click', (event) => {
    if(event.target.matches('.box')) event.target.classList.toggle('green');
    
});