let prevNumber=''
let calculationOperator=''
let currentNumber = '0'

//script clik number//
const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=>{
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value)
        updatescreen(currentNumber)
    });
});
//end script clik number//

//start tampil layar//
const calculatorScreen = document.querySelector('.calculator-screen')
const updatescreen=(number) =>{
    calculatorScreen.value=number
};

const inputNumber = (number) => {
    if(currentNumber==='0'){
        currentNumber=number
    }else{
        currentNumber+=number
    };
};
//end tampil layar//
//start operator
const operators = document.querySelectorAll(".operator")
operators.forEach((operator)=>{
    operator.addEventListener("click",(event) =>{
        inputOperator(event.target.value)
    });

});

const inputOperator=(operator)=>{
    if(calculationOperator===''){
        prevNumber=currentNumber
    }
    calculationOperator=operator
    currentNumber='0'
};
//End operator//
//start equal//
const equalSign = document.querySelector('.equal')
equalSign.addEventListener('click', (event)=>{
    calculate(event.target.value)
    updatescreen(currentNumber)
});
//end equal//

//start calculate//
const calculate = ()=>{
    let result = ''
    switch(calculationOperator){
        case "+":
        result = parseFloat(prevNumber)+parseFloat(currentNumber)
        break
        case "-":
        result = parseFloat(prevNumber)-parseFloat(currentNumber)
        break
        case "*":
        result = parseFloat(prevNumber)*parseFloat(currentNumber)
        break
        case "/":
        result = parseFloat(prevNumber)/parseFloat(currentNumber)
        break
        default:
            break
    };
    currentNumber=result
    calculationOperator=''
};
//end calculate//

//start clear screen
const clearBtn=document.querySelector('.clear')
clearBtn.addEventListener('click', () =>{
    clearAll();
    updatescreen(currentNumber)
});

const clearAll = () => {
    prevNumber=''
    calculationOperator=''
    currentNumber='0'
};
//end clear screen
//start decimal
const decimal=document.querySelector('.decimal')
decimal.addEventListener('click',(event)=>{
    inputDecimal(event.target.value)
    updatescreen(currentNumber)
});

inputDecimal=(dot)=>{
    if(currentNumber.includes('.')){
        return
    };
    currentNumber += dot
};
//end decimal


