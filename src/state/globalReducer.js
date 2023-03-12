import initialState from "./data"
const globalReducer = function(state = initialState, action){

    switch(action.type){
        case 'CHANGE_THEME':
            return {...state,isDarkModeOn: action.payload}
        
        case 'ADD_TO_LIKE':
        return {...state,likedVideos :[...state.likedVideos,action.payload.data] }
        
        default:
            return state
    }

}

export default globalReducer