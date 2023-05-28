
const redux=require('redux');
const createStore=redux.createStore;
const BUY_CAKE="buy_cake";

const buyCake=()=>{
    return {
        type:BUY_CAKE,
        info:"cake is purchased"
    }

}

//we require a state

const initialState={
    noOfCakes:10
}

const reducer=(state=initialState,action)=>{
   switch(action.type){
    case BUY_CAKE:
        console.log("this")
        return {
            ...state,
            noOfCakes:state.noOfCakes-1   
        }
    
    default:
        console.log("default")
        return state;
   }
}


const store=createStore(reducer);


console.log({"initial state ":initialState});

const unsubscribe=store.subscribe(()=>{
    console.log({"updated state ":store.getState()});
})


store.dispatch(buyCake());
store.dispatch(buyCake());


unsubscribe()