export const initalState={
    basket:[
    { id:"12345",
        title:"The Intelligent Investor",
        price:10.00,
        rating:5,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"
    },
    { id:"12345",
    title:"The Intelligent Investor",
    price:10.00,
    rating:5,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9guo0gZ9ji-Ng8lVadpdzCXJ6fn-x_7onJg&usqp=CAU"
    },
    ],
    user:null,
};
export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price +amount,0);

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'Add_To_BASKET':
            //Logic for adding item
            return {
                ...state,
                basket:[...state.basket, action.item],
                };
        case 'Remove_From_BASKET':
            //Logic for removing item.
            let newBasket=[...state.basket];

            const index= state.basket.findIndex((basketItem)=>basketItem.id===action.id);

            if(index>=0){
                newBasket.splice(index,1);
            }
            else{
                console.warn("item not found");
            }
            return {...state, 
                    basket:newBasket};
    
        default:
            return state;
    }
}

export default reducer;