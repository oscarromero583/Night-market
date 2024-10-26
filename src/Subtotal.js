import React from "react";
import './Subtotal.css';
import CurrencyInput from 'react-currency-input-field';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const [value, setValue] = React.useState(0);
    const [{basket}] = useStateValue();


    return (
        
        <div className="subtotal">
            <p>
                Subtotal ({basket.length} items)
            </p>
        
            <CurrencyInput
                decimalScale={2}
                value={getBasketTotal(basket)}
                onValueChange={(newValue) => setValue(newValue)}
                prefix="$"
            />
            
            <small className="subtotal__gift">
                <input type="checkbox" /> This contains a gift
            </small>
            <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;
