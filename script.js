function calculate(){

  const height = document.getElementById('input-height')
  const weight = document.getElementById('input-weight')
  const bmi_result = document.getElementById('bmi-result')
  const situation = document.getElementById('situation')
  var bmi = (weight.value) / ((height.value/100) ** 2)

  bmi_result.innerText = `${bmi.toFixed(2)}`

  if (bmi <= 18.5){
    situation.innerText = 'Underweight'
    console.log(`${bmi.toFixed(2)}`)
  } else if (bmi <= 24.9){
    situation.innerText = 'Normal Range'
    console.log(`${bmi.toFixed(2)}`)
  } else if (bmi <= 29.9){
    situation.innerText = 'Overweight'
    console.log(`${bmi.toFixed(2)}`)
  } else if (bmi <= 34.9){
    situation.innerText = 'Obese Class I'
    console.log(`${bmi.toFixed(2)}`)
  } else if (bmi <= 39.9){
    situation.innerText = 'Obese Class II'
    console.log(`${bmi.toFixed(2)}`)
  } else if (bmi >= 40){
    situation.innerText = 'Obese Class III'
    console.log(`${bmi.toFixed(2)}`)
  }
  else{
    alert("Please insert a valid input.")
    bmi_result.innerText = ''
  }

  // Clear input fields
  height.value = ''
  weight.value = ''
}