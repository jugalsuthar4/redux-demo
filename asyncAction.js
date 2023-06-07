const redux=require('redux')
const createStore=reducer.createStore;
//INITIAL STATE
const initialState ={
    loading:false,
    users:[],
    error:""
}

// Actions

const FETCH_USER_REQUEST="FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS="FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE="FETCH_USE4R_FAILURE"

//ACTION CREATORS

const fetchUserRequest=()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}

const fetchUserSuccess=user=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload:user,
    }
}

const fetchUserFailure=error=>{
    return {
        type:FETCH_USER_FAILURE,
        payload:error
    }
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return {
                loading:false,
                users:action.payload,
                error:""
            }
        case FETCH_USER_FAILURE:
            return {
                loading:false,
                users:[],
                error:action.payload
            }
    }
}


const store=createStore(reducer)



