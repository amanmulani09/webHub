import initialState from "./data"
const globalReducer = function(state = initialState, action){

    switch(action.type){
        case 'CHANGE_THEME':
            return {...state,isDarkModeOn: action.payload}
        
        default:
            return state
    }

}

export default globalReducer