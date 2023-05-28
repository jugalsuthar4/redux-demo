
const redux=require('redux');
const createStore=redux.createStore;

const combineReducer=redux.combineReducers


const BUY_CAKE="buy_cake";
const BUY_ICECREAM='buy_icecream'

const buyCake=()=>{
    return {
        type:BUY_CAKE,
        info:"cake is purchased"
    }

}

const buyIceCream=()=>{
    return {
        type:BUY_ICECREAM
    }
}

//we require a state

const initialCakeState={
    noOfCakes:10
}

const intialIceCreamState={
    noOfIceCreams:20
}


const cakeReducer=(state=initialCakeState,action)=>{
   switch(action.type){
    case BUY_CAKE:
        return {
            ...state,
            noOfCakes:state.noOfCakes-1   
        }
    
    default:
        return state;
   }
}

const iceCreamReducer=(state=intialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIceCreams:state.noOfIceCreams-1
            }
        default:
            return state;
    }
}


const rootReducer=combineReducer({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store=createStore(rootReducer);


// console.log({"initial state ":initialState});

const unsubscribe=store.subscribe(()=>{
    console.log({"updated state ":store.getState()});
})


store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


unsubscribe()