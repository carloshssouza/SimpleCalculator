var buttonClear = document.querySelector('.clear')
var buttonEqual = document.querySelector('.equal')
var inputs = document.querySelector('.input-number')
var buttonNumbers = document.querySelectorAll('.button-number')
var buttonOperations = document.querySelectorAll('.button-operation')
var result = 0
var check = false


//clear the input
buttonClear.addEventListener('click', () =>{
    inputs.value = ''
})

//result
buttonEqual.addEventListener('click', () =>{
    result = eval(inputs.value)
    console.log(result)
    inputs.value = result
    check = true
})

//click in numbers and send to input field
for(var i = 0; i < buttonNumbers.length; i++){
        
       buttonNumbers[i].addEventListener('click', valueNumberFunc)
}

function valueNumberFunc(){
    if(check === true){
        inputs.value = ''
        check = false
    }
    inputs.value += this.value
}

//choose the operation
for(var i = 0; i < buttonOperations.length; i++){
    buttonOperations[i].addEventListener('click', valueOperationFunc)
}

function valueOperationFunc(){
    inputs.value += this.value
}



