const form =  document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    console.log(typeof(height) )
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please enter valid height value ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight) || weight < 9 ){
        results.innerHTML = `please enter valid weight value: ${weight}`
    }else {
       const bmi =  (weight / ((height*height)/10000)).toFixed(2)
       results.innerHTML = `<span>${bmi}</span>`
       if(bmi < 19){
        results.innerHTML = `BMI:${bmi} Under weight`
   }
       
    }
        
    
})