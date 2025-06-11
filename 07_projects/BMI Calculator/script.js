
const height = document.getElementById('height')

let heightValue;
height.addEventListener('input', function() {

    heightValue = parseInt(this.value);
    console.log(this.value);
    

})


const weight = document.getElementById('weight')
let weightValue
weight.addEventListener('input', function() {

    weightValue = parseInt(this.value);
    console.log(this.value);
    

})

const calculate = document.getElementById('calculate')

calculate.addEventListener('click',  function(e ) {

    const res = weightValue+heightValue;
    console.log(res);
    
    console.log("Clkcked");
    
})
console.log(calculate);

// calculate.addEventListener(onclick)
// console.log(height) ;
// console.log(height.innerText)