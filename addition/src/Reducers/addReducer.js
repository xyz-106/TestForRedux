import addActionType from '../Action/addActionType';
const { ADD_NUMBER,SUBSTRACT_NUMBER } = addActionType;
const initState = {
    number_one:'1',
    number_two:'2',
    sum:'0',
    substract:'0',
}
const addReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return {
               ...state,sum:parseInt(action.number_one)+parseInt(action.number_two)
            }
        case SUBSTRACT_NUMBER:
            return{
               ...state,substract:parseInt(action.number_one)-parseInt(action.number_two)             
            }
        default:
            return state
    }
}


export default addReducer; 