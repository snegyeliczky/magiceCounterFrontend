import {mathOperations} from "./mathOperations";

const NumberCheck = (number) => {
    const numberValue = parseFloat(number);
    return isNaN(numberValue) ? 0 : numberValue;
};


const AddNumbers = (firstElement, secondElement, mathOperation) =>{
    const{add,multiple,divide,minus} = mathOperations;
    const firstNumber = NumberCheck(firstElement);
    const secondNumber = NumberCheck(secondElement);
    switch (mathOperation) {
        case add:
            return firstNumber+secondNumber;
        case minus:
            return firstNumber-secondNumber;
        case multiple:
            return firstNumber*secondNumber;
        case divide:
            return firstNumber/secondNumber;

    }
};

export default AddNumbers;