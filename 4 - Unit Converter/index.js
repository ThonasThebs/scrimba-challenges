let unitInput = document.getElementById("input-nmb")
const numberFromLocalStorate = JSON.parse(localStorage.getItem("number"))


// output fields
//lenght
const metersFeet = document.getElementById("meters-to-feet")
const feetMeters = document.getElementById("feet-to-meters")
//Volume
const litersGallons = document.getElementById("liters-to-gallons")
const gallonsLiters = document.getElementById("gallons-to-liters")
//mass
const kilosPounds = document.getElementById("kilos-to-pounds")
const poundsKilos = document.getElementById("pouds-to-kilos")

if (numberFromLocalStorate) {
    unitInput.value = numberFromLocalStorate
    conversion(unitInput.value)
}


unitInput.addEventListener("input", function(){
    //Store in local storage, as we learned it but didn`t get to practice
    localStorage.setItem("number",JSON.stringify(unitInput.value))
    //edit input lenght
    unitInput.style.width = (unitInput.value.length * 1.05) + "ch"
    conversion(unitInput.value)
 
})

function conversion(value){
    //meters
    metersFeet.textContent = `${value} meters = ${(value * 3.281).toFixed(3)} feet`
    feetMeters.textContent = `${value} feet = ${(value * 0.3048).toFixed(3)} meters`
    //volume
    litersGallons.textContent = `${value} liters = ${(value * 0.261).toFixed(3)} gallons`
    gallonsLiters.textContent = `${value} gallons = ${(value * 3.78541).toFixed(3)} liters`
    //mass
    kilosPounds.textContent = `${value} kilos = ${(value * 2.204).toFixed(3)} pounds`
    poundsKilos.textContent = `${value} pounds = ${(value * 0.453592).toFixed(3)} kilos`
}
