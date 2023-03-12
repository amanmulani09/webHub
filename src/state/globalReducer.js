import initialState from "./data"
const globalReducer = function(state = initialState, action){

    switch(action.type){
        case 'CHANGE_THEME':
            return {...state,isDarkModeOn: action.payload}
        
        case 'ADD_TO_LIKE':
        return {...state,likedVideos :[...state.likedVideos,action.payload.data] }
        
        case 'REMOVE_FROM_LIKE':
        const filterdLikedVideos = state.likedVideos.filter((item)=> item.id.videoId !== action.payload.data.id.videoId)
        return {...state,likedVideos:[...filterdLikedVideos]};
        default:
            return state
    }

}

export default globalReducer