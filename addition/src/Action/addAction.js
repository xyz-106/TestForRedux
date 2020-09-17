import addActionType from './addActionType';
const { ADD_NUMBER,SUBSTRACT_NUMBER} = addActionType;

function addNumber(number_one,number_two){
    return{
        type: ADD_NUMBER,
        number_one,number_two
    }
}

function substractNumber(number_one,number_two){
    return{
        type:SUBSTRACT_NUMBER,
        number_one,number_two
    }
}

const addAction = {
    addNumber,
    substractNumber
}
export default addAction;