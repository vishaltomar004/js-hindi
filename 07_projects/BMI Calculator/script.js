let height = document.getElementById("height");

let heightValue;
height.addEventListener('keypress' , function(e)
{
    heightValue = e.target.value;
    console.log(heightValue);
})


let weight = document.getElementById("weight");

let weightValue;
weight.addEventListener('keypress' , function(e)
{
    weightValue = e.target.value;
    console.log(weightValue);
})

const BMIAnswer = (100*100)*weightValue/ heightValue;


const button = document.getElementsByClassName('.button');

button.addEventListener('click' , add);

function add()
{
const div = document.createElement('div');
div.className ="outputprint";
const textToAdd = document.createTextNode(BMIAnswer);
div.appendChild(textToAdd);
div.appendChild(textToAdd);
}