// Here we define all the application-level states and define actions to make changes to the state

export const initialState = {
    basket: [] // Initialize an empty basket
};

// Selector
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET": 
            return {
                ...state,
                basket: [...state.basket, action.item], // Add new item to the basket
            };

        case "REMOVE_FROM_BASKET": {
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cannot remove product (id: ${action.id}) as it is not in the basket!`
                );
            }

            return {
                ...state,
                basket: newBasket,
            };
        }

        // You can add more cases here to handle other actions
        default: 
            return state; // Return current state if no action matches
    }
};

export default reducer;
