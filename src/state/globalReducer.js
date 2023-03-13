import initialState from "./data"
const globalReducer = function(state = initialState, action){

    switch(action.type){
        case 'CHANGE_THEME':
            return {...state,isDarkModeOn: action.payload}
        
        case 'ADD_TO_LIKE':
        return {...state,likedVideos :[...state.likedVideos,action.payload.data] }

        case 'ADD_TO_WATCHLIST':
        return {...state,watchLater :[...state.watchLater,action.payload.data] }

        case 'ADD_TO_HISTORY':
        return {...state,history :[...state.history,action.payload.data] }

        case 'REMOVE_FROM_LIKE':
        const filterdLikedVideos = state.likedVideos.filter((item)=> item.id.videoId !== action.payload.data.id.videoId)
        return {...state,likedVideos:[...filterdLikedVideos]};
        case 'REMOVE_FROM_WATCH_LATER':
        const filterdWatchLaterVideos = state.watchLater.filter((item)=> item.id.videoId !== action.payload.data.id.videoId)
        return {...state,watchLater:[...filterdWatchLaterVideos]};
        case 'CLEAR_LIKED_VIDEOS':
        return {...state,likedVideos:[]}
        case 'CLEAR_WATCH_LATER':
        return {...state,watchLater:[]}

        case 'CLEAR_WATCH_HISTORY':
        return {...state,history:[]}
        default:
            return state
    }

}

export default globalReducer