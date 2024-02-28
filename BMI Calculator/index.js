

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    if(height==='' || height===0 || isNaN(height)){
        result.innerHTML= "Please enter a valid Height"
    }else if (weight === ''|| weight === 0 ||isNaN(weight)) {
        result.innerHTML="Please enter a valid weight"
    }else{ const bmi = weight/(height*height).toFixed(2)
    result.innerHTML=`<span>${bmi}</span>`}
   
}) 