
const initialState =  {
    state : 'home'
}

const renderReducer = (state = initialState, action) =>{
switch(action.type){
    case 'SET_HOME' : 
    return{
        ...state,
        state : action.payload
    }
    case 'SET_ACTIVITY' : 
    return{
        ...state,
        state : action.payload
    }
    case 'SET_MARKET' : 
    return{
        ...state,
        state : action.payload
    }
    case 'SET_EARN' : 
    return{
        ...state,
        state : action.payload
    }
    case 'SET_WALLET' : 
    return{
        ...state,
        state : action.payload
    }
    default : 
    return state
}
}

export default renderReducer