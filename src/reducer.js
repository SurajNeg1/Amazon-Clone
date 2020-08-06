export const initalState={
    basket:[],
    user:null,
};

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'Add_To_BASKET':
            //Logic for adding item
            return {
                ...state,
                basket:[...state.basket, action.item]
            };
        case 'Remove_From_BASKET':
            //logic for removing item.
            return {state}
    
        default:
            return state;
    }
}

export default reducer;